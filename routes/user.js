const express = require("express");
const router = express.Router();
const {addUser,login,getAuth,getAll} = require ('../controller/user')

router.post("/register",addUser);
router.post("/login",login);
router.get("/auth",getAuth);
router.get("/data",getAll);



module.exports = router;
