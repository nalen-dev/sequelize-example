const express = require("express");
const { item } = require("./models");
const app = express();

app.use(express.json());

app.listen(3000);
