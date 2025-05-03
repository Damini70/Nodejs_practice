const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    first: { type: String, required: true, trim: true },
    last: { type: String, required: true, trim: true }
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: ["customer", "chef", "waiter", "manager"],
    default: "customer"
  }
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
