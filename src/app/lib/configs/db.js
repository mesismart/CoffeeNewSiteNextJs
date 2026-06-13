const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to DB");
      return true;
    } else {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Connected to DB");
    }
  } catch (err) {
    console.error("connectToDB error:", err);
    throw err;
  }
};

export default connectToDB;
