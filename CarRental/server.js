const express = require("express");
const cors = require("cors");
const database = require("./database");
const dotenv = require("dotenv");
const { User } = require("./db/User");
const jwt = require("jsonwebtoken");
const { Car } = require("./db/Car");

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
database.connect();

app.get("/api/users", (req, res) => {
  res.status(200).send(users);
});

const generateToken = (userId) => {
  const secretKey = process.env.JWT_SECRET || "carrental";
  const token = jwt.sign({ id: userId }, secretKey, { expiresIn: "1h" });
  return token;
};

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Email and password are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    if (password !== user.password) {
      return res.status(401).send({ message: "Invalid password" });
    }
    const token = generateToken(user._id);
    console.log("User logged in:", email);
    res.status(200).send({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send({ message: "Login failed" });
  }
});

app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).send({ message: "All fields are required" });
    const newUser = await User.create({
      name,
      email,
      password,
    });
    console.log("User registered:", newUser);
    res.status(201).send({ message: "Registration successful" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).send({ message: "Registration failed" });
  }
});

app.get("/api/profile", async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).send({ message: "Email is required" });
    }

    const user = await User.findOne({ email }).populate("Cars");
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    res.status(200).send({
      name: user.name,
      email: user.email,
      Cars: user.Cars || [], // Send the populated car details
    });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

app.post("/api/add-car", async (req, res) => {
  try {
    const { car } = req.body;

    if (!car) {
      return res.status(400).send({ error: "Car details are required." });
    }

    // Check if the car ID already exists
    const existingCar = await Car.findOne({ id: car.id });
    if (existingCar) {
      return res
        .status(400)
        .send({ error: "Car with this ID already exists." });
    }

    // Save the car to the database
    const newCar = new Car(car);
    await newCar.save();

    res.status(200).send({ message: "Car added successfully", car: newCar });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

app.post("/api/book-car", async (req, res) => {
  try {
    const { email, carId } = req.body;
    if (!email || !carId)
      return res.status(400).send({ error: "Email and car ID are required." });

    const car = await Car.findById(carId); // Find car by ObjectId
    if (!car) return res.status(404).send({ error: "Car not found." });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).send({ error: "User not found." });

    if (user.Cars.includes(car._id)) {
      return res
        .status(400)
        .send({ error: "Car is already booked by the user." });
    }

    user.Cars.push(car._id); // Push car ObjectId to user Cars array
    await user.save();

    res.status(200).send({ message: "Car booked successfully" });
  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).send({ message: "Car Booking Failed" });
  }
});

app.get("/api/cars", async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ message: "Failed to fetch cars" });
  }
});

app.post("/api/username", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send({ error: "User not found" });
    res.status(200).send({ name: user.name });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
app.post("/api/delete-car", async (req, res) => {
  try {
    const { email, carId } = req.body;

    if (!carId || !email)
      return res.status(400).send({ error: "Input fields are required." });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).send({ error: "User not found." });

    const carIndex = user.Cars.findIndex((car) => car._id.toString() === carId);
    if (carIndex === -1) {
      return res.status(404).send({ error: "Car not found." });
    }

    user.Cars.splice(carIndex, 1);
    await user.save();

    res.status(200).send({ message: "Car booking deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
