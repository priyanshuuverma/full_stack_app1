import express from "express";
import color from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
//configure env
dotenv.config();

const app = express();
//connect db
connectDB();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes

app.use("/api/v1/auth/", authRoute);
//rest api
app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});

const PORT = process.env.PORT; //8080;

//run
app.listen(PORT, () => {
  console.log(`Server Running on${process.env.DEV_MODE} ${PORT}`.bgCyan.white);
});
