import express from "express";
import user from "./user.mjs";
import product from "./prodect.mjs";

const router = express.Router();
console.log("router index");

router.use('/user', user)
router.use('/product', product  )

export default router