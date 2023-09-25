import express from "express";
import { router } from "./routes/routes";
import cors from "cors";

// CORS middleware
const allowCrossDomain = (req: any, res: any, next: any) => {
  res.header(`Access-Control-Allow-Origin`, `http://localhost:3000`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
};

export const app = express();
app.use(cors);
app.use(express.json());
app.use(allowCrossDomain);
app.use("/", router);
app.get("/", (req, res) => res.send("Welcome to Weather App!"));
app.get("/*", (req, res) => res.send("Not Found!"));
