import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("API running ");
});

export default app;
