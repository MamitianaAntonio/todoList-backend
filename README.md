# 🗂️ Todo List Backend

Backend for a simple Todo List application using **Express.js** with todos stored in a JSON file.

---

## **Technologies Used**

- Node.js
- Express.js
- CORS
- JSON file storage (`todos.json`)

---

## **Project Structure**
**backend/**

- **controllers/**
  - `todoController.js` 📝 Handles the logic for todos
- **routes/**
  - `todoRoutes.js` 🚀 Defines API endpoints
- **utils/**
  - `fileUtils.js` ⚙️ Helper functions to read/write todos.json
- `todos.json` 📄 JSON file storing todos
- `server.js` 🔑 Entry point of the server
- `.gitignore` 🚫 Git ignore file

---

## **API Endpoints**

| Method | Route      | Description                |
| ------ | ---------- | -------------------------- |
| GET    | /todos     | Get all todos              |
| POST   | /todos     | Add a new todo             |
| PATCH  | /todos/:id | Toggle todo as done/undone |
| DELETE | /todos/:id | Delete a todo              |

---

## **Usage**

1. Install dependencies:

```bash
npm install

```
