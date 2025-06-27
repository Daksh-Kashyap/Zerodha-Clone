const express = require("express");
require("dotenv").config();

const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");


const PORT = 8080;
const uri = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(uri)
  .then(() => console.log("DB connected!"))
  .catch((err) => console.error("DB connection failed:", err));

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPosition = await PositionsModel.find({});
  res.json(allPosition);
});

app.post("/newOrders", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`App Started on ${PORT}`);
});
