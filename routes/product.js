const express = require("express");
const router = express.Router();
const { getAll, getOne, addProduct } = require("../controller/products");

router.post("/", addProduct);
router.get("/:id", getOne);
router.get("/", getAll);

module.exports = router;
