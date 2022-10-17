const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
const beverages = require("./data/beverages");
const desserts = require("./data/desserts");

dotenv.config({ path: "./.env" });

app.use(cors());
app.use(express.json());

app.get("/beverages", (req, res) => {
  res.status(200).json(beverages);
});
app.get("/desserts", (req, res) => {
  res.status(200).json(desserts);
});

// get beverage by id
app.get("/beverages/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const beverage = beverages.find((beverage) => beverage.id === id);
  return res.json(beverage);
});

// get desserts by id
app.get("/desserts/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const dessert = desserts.find((dessert) => dessert.id === id);
  return res.json(dessert);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
