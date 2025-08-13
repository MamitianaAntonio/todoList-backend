import { readTodos, writeTodos } from "../utils/fileUtils.js";

// get all todos in the json file
const getTodos = (_req, res) => {
  const todos = readTodos();
  res.json(todos);
};

const addTodo = () => {};

const toogleTodo = () => {};

const deleteTodo = () => {};
