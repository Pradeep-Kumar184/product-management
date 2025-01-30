import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import productRoute from "./routes/productRoute.js";
import connectDb from "./config/db.js";

// config dotenv
dotenv.config();
// database config
connectDb()

const app = express();
// middleware
app.use(express.json({ limit: "500mb" }));
app.use(morgan("dev"));
app.use(cors());

// route
app.use("/api/v1/product", productRoute);
// rest api
app.get("/", (req, res) => {
  res.send("welcome to product management");
});

// port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`.bgCyan.yellow);
});
