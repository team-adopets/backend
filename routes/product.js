const express = require("express");
const router = express.Router();
const {addUser,login,getAuth,getAll} = require ('../controller/user')

router.post("/products",getProducts);
router.post("/products/:id", getSingleProduct)


module.exports = router;