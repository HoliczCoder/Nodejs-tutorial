const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/intercourse_db");
    console.log("connect succesfully");
  } catch (e) {
    console.log(e);
  }
}

module.exports = { connect };
