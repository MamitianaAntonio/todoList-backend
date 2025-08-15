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

// toogle todo done or not (boolean)
export const toogleTodo = (req, res) => {
  const { id } = req.params;
  const todosData = readTodos();
  const todo = todosData.todos.find((t) => t.id === Number(id));

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todo.done = !todo.done;
  writeTodos(todosData);
  res.json(todo);
};

const deleteTodo = () => {};
