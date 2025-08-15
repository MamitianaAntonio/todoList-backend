import { readTodos, writeTodos } from "../utils/fileUtils.js";

// get all todos in the json file
export const getTodos = (_req, res) => {
  const todos = readTodos();
  res.json(todos);
};

// add to do to the json file
export const addTodo = (req, res) => {
  const { text } = req.body;

  if (!text || !text.trim()) {
    return res.status(400).json({ message: "The todo text is required" });
  }

  const todos = readTodos();
  const newTodo = { id: Date.now(), text: text.trim(), done: false };
  todos.todos.push(newTodo);
  writeTodos(todos);

  res.status(201).json(newTodo);
};

export const toogleTodo = () => {};

const deleteTodo = () => {};
