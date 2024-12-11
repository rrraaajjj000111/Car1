const mongoose = require("mongoose");
const { Car } = require("./db/Car"); // Assuming car.js exports the Car model

const cars = [
  {
    name: "Tesla Model S",
    description: "Luxury electric sedan",
    location: "New York",
    date: "2024-11-22",
    preference: "luxury",
  },
  {
    name: "Toyota Camry",
    description: "Reliable family sedan",
    location: "Los Angeles",
    date: "2024-12-01",
    preference: "economy",
  },
  {
    name: "Ford Mustang",
    description: "Iconic American sports car",
    location: "San Francisco",
    date: "2024-11-18",
    preference: "sports",
  },
  {
    name: "BMW X5",
    description: "Luxury midsize SUV",
    location: "Miami",
    date: "2024-12-05",
    preference: "luxury",
  },
  {
    name: "Chevrolet Suburban",
    description: "Spacious full-size SUV",
    location: "Chicago",
    date: "2024-12-10",
    preference: "family",
  },
  {
    name: "Honda Accord",
    description: "Economical and practical sedan",
    location: "Seattle",
    date: "2024-11-25",
    preference: "economy",
  },
  {
    name: "Porsche 911",
    description: "High-performance sports car",
    location: "Las Vegas",
    date: "2024-11-30",
    preference: "sports",
  },
  {
    name: "Tesla Model X",
    description: "Luxury electric SUV",
    location: "San Diego",
    date: "2024-12-12",
    preference: "luxury",
  },
  {
    name: "Jeep Wrangler",
    description: "Off-road adventure vehicle",
    location: "Denver",
    date: "2024-12-03",
    preference: "adventure",
  },
  {
    name: "Hyundai Elantra",
    description: "Affordable and efficient sedan",
    location: "Phoenix",
    date: "2024-11-28",
    preference: "economy",
  },
  {
    name: "Lexus RX",
    description: "Comfortable luxury crossover",
    location: "Dallas",
    date: "2024-12-15",
    preference: "luxury",
  },
  {
    name: "Subaru Outback",
    description: "Versatile all-terrain vehicle",
    location: "Portland",
    date: "2024-11-20",
    preference: "adventure",
  },
  {
    name: "Volkswagen Passat",
    description: "European-style sedan",
    location: "Boston",
    date: "2024-12-07",
    preference: "economy",
  },
  {
    name: "Mercedes-Benz S-Class",
    description: "Ultimate luxury sedan",
    location: "Atlanta",
    date: "2024-12-18",
    preference: "luxury",
  },
  {
    name: "Chevrolet Corvette",
    description: "Classic American sports car",
    location: "Houston",
    date: "2024-12-20",
    preference: "sports",
  },
  {
    name: "Mazda CX-5",
    description: "Stylish and efficient SUV",
    location: "Orlando",
    date: "2024-11-29",
    preference: "economy",
  },
  {
    name: "Audi A4",
    description: "Sophisticated German sedan",
    location: "Philadelphia",
    date: "2024-12-02",
    preference: "luxury",
  },
  {
    name: "Toyota RAV4",
    description: "Popular compact SUV",
    location: "Charlotte",
    date: "2024-11-27",
    preference: "family",
  },
  {
    name: "Nissan Altima",
    description: "Comfortable and reliable sedan",
    location: "Austin",
    date: "2024-12-14",
    preference: "economy",
  },
  {
    name: "Range Rover Sport",
    description: "Premium SUV for all terrains",
    location: "San Antonio",
    date: "2024-12-08",
    preference: "luxury",
  },
  {
    name: "Dodge Charger",
    description: "Bold performance sedan",
    location: "Detroit",
    date: "2024-11-23",
    preference: "sports",
  },
  {
    name: "Kia Soul",
    description: "Compact crossover with a funky design",
    location: "Salt Lake City",
    date: "2024-12-09",
    preference: "economy",
  },
  {
    name: "BMW 3 Series",
    description: "Luxury compact sedan",
    location: "Nashville",
    date: "2024-11-26",
    preference: "luxury",
  },
  {
    name: "GMC Sierra",
    description: "Powerful full-size pickup truck",
    location: "Phoenix",
    date: "2024-12-04",
    preference: "utility",
  },
  {
    name: "Jaguar F-Type",
    description: "Elegant British sports car",
    location: "Tampa",
    date: "2024-12-11",
    preference: "sports",
  },
  {
    name: "Mini Cooper",
    description: "Compact car with European flair",
    location: "Baltimore",
    date: "2024-11-21",
    preference: "economy",
  },
  {
    name: "Volvo XC90",
    description: "Safe and luxurious midsize SUV",
    location: "Hartford",
    date: "2024-12-13",
    preference: "luxury",
  },
  {
    name: "Ram 1500",
    description: "Capable and comfortable pickup truck",
    location: "Columbus",
    date: "2024-12-16",
    preference: "utility",
  },
  {
    name: "Alfa Romeo Giulia",
    description: "Stylish Italian sedan",
    location: "Indianapolis",
    date: "2024-12-17",
    preference: "luxury",
  },
  {
    name: "Tesla Cybertruck",
    description: "Futuristic electric truck",
    location: "Palo Alto",
    date: "2024-11-24",
    preference: "utility",
  },
  // Additional 50 cars
  {
    name: "Honda Civic",
    description: "Reliable and fuel-efficient compact car",
    location: "Detroit",
    date: "2024-12-02",
    preference: "economy",
  },
  {
    name: "Ford F-150",
    description: "America's best-selling pickup truck",
    location: "Dallas",
    date: "2024-12-15",
    preference: "utility",
  },
  {
    name: "Hyundai Sonata",
    description: "Comfortable and spacious midsize sedan",
    location: "Chicago",
    date: "2024-11-28",
    preference: "economy",
  },
  {
    name: "Kia Sportage",
    description: "Stylish and practical compact SUV",
    location: "Los Angeles",
    date: "2024-12-09",
    preference: "family",
  },
  {
    name: "Nissan Rogue",
    description: "Spacious and versatile compact SUV",
    location: "Miami",
    date: "2024-12-04",
    preference: "family",
  },
  {
    name: "Chevrolet Silverado",
    description: "Powerful and capable full-size pickup truck",
    location: "Houston",
    date: "2024-12-18",
    preference: "utility",
  },
  {
    name: "Honda Civic",
    description: "Reliable and fuel-efficient compact car",
    location: "Detroit",
    date: "2024-12-02",
    preference: "economy",
  },
  {
    name: "Ford F-150",
    description: "America's best-selling pickup truck",
    location: "Dallas",
    date: "2024-12-15",
    preference: "utility",
  },
  {
    name: "Hyundai Sonata",
    description: "Comfortable and spacious midsize sedan",
    location: "Chicago",
    date: "2024-11-28",
    preference: "economy",
  },
  {
    name: "Kia Sportage",
    description: "Stylish and practical compact SUV",
    location: "Los Angeles",
    date: "2024-12-09",
    preference: "family",
  },
  {
    name: "Nissan Rogue",
    description: "Spacious and versatile compact SUV",
    location: "Miami",
    date: "2024-12-04",
    preference: "family",
  },
  {
    name: "Chevrolet Silverado",
    description: "Powerful and capable full-size pickup truck",
    location: "Houston",
    date: "2024-12-18",
    preference: "utility",
  },
  {
    name: "Jeep Cherokee",
    description: "Capable and stylish SUV",
    location: "Philadelphia",
    date: "2024-11-22",
    preference: "adventure",
  },
  {
    name: "Toyota Tacoma",
    description: "Reliable and rugged midsize pickup truck",
    location: "Denver",
    date: "2024-12-03",
    preference: "utility",
  },
  {
    name: "Subaru Forester",
    description: "Practical and versatile SUV",
    location: "Portland",
    date: "2024-11-20",
    preference: "family",
  },
  {
    name: "Mazda CX-9",
    description: "Spacious and stylish three-row SUV",
    location: "Seattle",
    date: "2024-12-01",
    preference: "family",
  },
  {
    name: "Volkswagen Tiguan",
    description: "Practical and versatile compact SUV",
    location: "New York",
    date: "2024-11-25",
    preference: "family",
  },
  {
    name: "Ford Explorer",
    description: "Spacious and capable midsize SUV",
    location: "Chicago",
    date: "2024-12-10",
    preference: "family",
  },
  {
    name: "Honda CR-V",
    description: "Popular and practical compact SUV",
    location: "Los Angeles",
    date: "2024-11-28",
    preference: "family",
  },
  {
    name: "Toyota Highlander",
    description: "Spacious and versatile three-row SUV",
    location: "Dallas",
    date: "2024-12-15",
    preference: "family",
  },
  {
    name: "Nissan Pathfinder",
    description: "Spacious and capable three-row SUV",
    location: "San Diego",
    date: "2024-12-12",
    preference: "family",
  },
  {
    name: "Chevrolet Equinox",
    description: "Stylish and efficient compact SUV",
    location: "Houston",
    date: "2024-12-20",
    preference: "family",
  },
  {
    name: "GMC Acadia",
    description: "Spacious and luxurious three-row SUV",
    location: "Atlanta",
    date: "2024-12-18",
    preference: "luxury",
  },
  {
    name: "Kia Telluride",
    description: "Stylish and spacious three-row SUV",
    location: "Phoenix",
    date: "2024-12-09",
    preference: "family",
  },
  {
    name: "Hyundai Palisade",
    description: "Spacious and luxurious three-row SUV",
    location: "Denver",
    date: "2024-12-03",
    preference: "family",
  },
  {
    name: "Ford Bronco",
    description: "Off-road capable SUV",
    location: "Detroit",
    date: "2024-11-23",
    preference: "adventure",
  },
  {
    name: "Land Rover Defender",
    description: "Off-road capable luxury SUV",
    location: "Miami",
    date: "2024-12-05",
    preference: "luxury",
  },
  {
    name: "Lexus LX",
    description: "Luxurious and capable full-size SUV",
    location: "Dallas",
    date: "2024-12-15",
    preference: "luxury",
  },
  {
    name: "Mercedes-Benz G-Class",
    description: "Iconic off-road luxury SUV",
    location: "New York",
    date: "2024-11-22",
    preference: "luxury",
  },
  {
    name: "BMW X7",
    description: "Luxurious and spacious three-row SUV",
    location: "Los Angeles",
    date: "2024-12-01",
    preference: "luxury",
  },
  {
    name: "Audi Q7",
    description: "Luxurious and spacious three-row SUV",
    location: "San Francisco",
    date: "2024-11-18",
    preference: "luxury",
  },
  {
    name: "Volvo XC60",
    description: "Safe and stylish midsize SUV",
    location: "Seattle",
    date: "2024-11-25",
    preference: "luxury",
  },
  {
    name: "Acura MDX",
    description: "Luxurious and spacious three-row SUV",
    location: "Chicago",
    date: "2024-12-10",
    preference: "luxury",
  },
  {
    name: "Infiniti QX60",
    description: "Luxurious and spacious three-row SUV",
    location: "Houston",
    date: "2024-12-20",
    preference: "luxury",
  },
  {
    name: "Cadillac Escalade",
    description: "Luxurious and powerful full-size SUV",
    location: "Detroit",
    date: "2024-11-23",
    preference: "luxury",
  },
  {
    name: "Lincoln Navigator",
    description: "Luxurious and spacious full-size SUV",
    location: "Dallas",
    date: "2024-12-15",
    preference: "luxury",
  },
  {
    name: "Rivian R1S",
    description: "Electric adventure SUV",
    location: "San Francisco",
    date: "2024-11-18",
    preference: "adventure",
  },
  {
    name: "Ford Bronco Sport",
    description: "Compact SUV with off-road capability",
    location: "Detroit",
    date: "2024-11-23",
    preference: "adventure",
  },
  {
    name: "Jeep Gladiator",
    description: "Mid-size pickup truck with off-road capability",
    location: "Denver",
    date: "2024-12-03",
    preference: "adventure",
  },
  {
    name: "Rivian R1T",
    description: "Electric pickup truck",
    location: "San Francisco",
    date: "2024-11-18",
    preference: "utility",
  },
];

const main = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://user:12345@cluster0.xxwbg.mongodb.net/CarRental",
      {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      }
    );

    console.log("Connected to MongoDB");

    await Car.insertMany(cars);
    console.log("Cars added successfully!");

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error adding cars:", error);
  }
};

main();