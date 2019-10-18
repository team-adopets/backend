const express = require("express");
const router = express.Router();
const {checkout} = require("../controller/checkout");

router.post("/", checkout);

module.exports = router;
