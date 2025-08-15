import express from "express";
import { addTodo, getTodos } from "../controller/todoController.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", addTodo);
// router.get("/:id", toogleTodo);
// router.get("/:id", deleteTodo);

export default router;
