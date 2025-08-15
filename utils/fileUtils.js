import fs, { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "../todos.json");

export const readTodos = () => {
  const data = readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

export const writeTodos = (todos) => {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
};
