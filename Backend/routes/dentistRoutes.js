const express = require("express");
const router = express.Router();
const Dentist = require("../models/Dentist");

router.get("/", async (req,res)=>{
  const dentists = await Dentist.find();
  res.json(dentists);
});

module.exports = router;