const express = require("express");
const router = express.Router();
const { getAll, getOne, addProduct,updateProduct } = require("../controller/products");

router.post("/", addProduct);
router.get("/:_id", getOne);
router.put("/:_id", updateProduct);
router.get("/", getAll);

module.exports = router;
