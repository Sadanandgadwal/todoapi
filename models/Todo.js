const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  text: {
    type: String,
    required: [true, "text is a required field"],
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
