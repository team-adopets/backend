const express = require("express");
const router = express.Router();
const {addPicture} = require ("../controller/pictures");

router.post("/", addPicture);

module.exports = router;
