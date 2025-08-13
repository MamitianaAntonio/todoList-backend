import fs, { readFileSync } from "fs";
import path from "path";

const filePath = path.resolve("../todos.json");

export const readTodos = () => {
  const data = readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

export const writeTodos = (todos) => {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
};
