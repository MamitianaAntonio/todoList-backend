import express from "express";

const router = express.Router();

router.get("/", getTodos);
router.get("/", addTodo);
router.get("/:id", toogleTodo);
router.get("/:id", deleteTodo);

export default router;
