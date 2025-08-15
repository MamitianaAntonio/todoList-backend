import express from "express";
import {
  addTodo,
  deleteTodo,
  getTodos,
  toogleTodo,
} from "../controller/todoController.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", addTodo);
router.patch("/:id", toogleTodo);
router.delete("/:id", deleteTodo);

export default router;
