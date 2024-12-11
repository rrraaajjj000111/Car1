const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL; // Retrieve the value from the .env file

exports.connect = () => {
  mongoose
    .connect(MONGODB_URL, {
      //   useNewUrlParser: true, // Recommended options for mongoose
      //   useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`DB Connection Success`); // Log after successful connection
    })
    .catch((err) => {
      console.error(`DB Connection Failed`);
      console.error(err);
      process.exit(1); // Exit with an error code
    });
};
