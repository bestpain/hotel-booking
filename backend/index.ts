import { Request, Response } from "express";

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

function connectDB() {
  try {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log(e);
  }
}

connectDB();
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.json("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
