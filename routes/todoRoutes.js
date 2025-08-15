import express from "express";
import { addTodo, getTodos, toogleTodo } from "../controller/todoController.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", addTodo);
router.patch("/:id", toogleTodo);
// router.get("/:id", deleteTodo);

export default router;
