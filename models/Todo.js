const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  //   text: String,
  //   complete: Boolean,
  //   timestamp: Date,
  text: {
    type: String,
    required: true,
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
