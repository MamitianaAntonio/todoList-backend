import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/todos/", todoRoutes);

app.listen(PORT, () => {
  console.log("The server was started on the port", PORT);
});
