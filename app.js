const express = require("express");
const connectDB = require("./models/mongo");
const Todo = require("./models/Todo");
const cors = require("cors");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(
  cors({
    origin: [
      "https://thriving-bombolone-98e8f7.netlify.app",
      "https://todoapp-yesg.netlify.app",
      "http://localhost:5173",
      "https://todoapi-production-db90.up.railway.app/todo",
      "*",
    ],
  })
);
app.use(express.json());

app.get("/todo", async (req, res) => {
  try {
    const todos = await Todo.find({});

    if (!todos) {
      return res.status(404).send("no todos found");
    }

    res.status(200).send(todos);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post("/todo", async (req, res) => {
  const { text } = req.body;
  try {
    const todo = new Todo({
      text,
    });
    await todo.save();
    res.status(201).send(todo);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.delete("/todo/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deltodo = await Todo.findByIdAndRemove(id);
    if (!deltodo) {
      return res.status(404).send("no todo found");
    }
    res.status(202).send("your todo has been deleted successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.patch("/todo/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).send("todo not found");
    }
    todo.complete = !todo.complete;

    await todo.save();
    res.status(200).send("your todo completed");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

connectDB().then(
  app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT} `);
  })
);
