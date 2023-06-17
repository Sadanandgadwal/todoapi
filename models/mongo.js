const mongoose = require("mongoose");

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

module.exports = async () => {
  await mongoose.connect(
    `mongodb+srv://${username}:${password}@cluster0.y4um6ol.mongodb.net/todomern?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  console.log("db connected");
};

// sadanandgadwal1;

// QNHLH4evOXPIb2tI;
