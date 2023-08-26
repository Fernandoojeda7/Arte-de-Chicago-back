import dotenv from "dotenv";
import express from "express";
import router from "./routes/index.routes";

dotenv.config().parsed;
const app = express();
app.use(express.json());

const PORT = 3001;

app.use("/api", router);

app.get("/", (_req, res) => {
  res.send("Ya corre el server");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} Version 0.0.1`);
});
