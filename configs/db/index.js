const mongoose = require("mongoose");

async function connect() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(
      `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.l1k7cqo.mongodb.net/`
    );
    console.log("MongoDb Connected...");
  } catch (error) {
    console.log("MongoDb Connected Fail...");
  }
}

module.exports = { connect };
