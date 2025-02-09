const express = require("express");
const router = express.Router();
const menuItem = require("./../models/menuItem");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenuIteme = new menuItem(data);

    const response = await newMenuIteme.save();
    console.log("menu is save");
    res.status(200).json(response);
  } catch (error) {
    console.log(err);
    res.status(500).json(error, "internal server error");
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await menuItem.find();
    console.log("menu is fetch");
    res.status(200).json(data);
  } catch (error) {
    console.log(err);
    res.status(500).json(error, "internal server error");
  }
});

router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;

    if (tasteType == "spicy" || tasteType == "sweet" || tasteType == "saulty") {
      const data = await menuItem.find({ taste: tasteType });
      console.log("data fetch");
      res.status(200).json(data);
    } else {
      res.status(404).json(error, "Invalid Work Type");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error, "internal server error");
  }
});

router.delete("/:id", async(req,res)=>{
  try {
    const menuId = req.params.id;
    const response = await menuItem.findByIdAndDelete(menuId);
    if(!response){
      res.status(404).json(error, "Invalid id");
    }
      console.log("data fetch");
      res.status(200).json("menuItem deleted");
  } catch (error) {
      console.log(error);
      res.status(500).json(error, "internal server error");
  }
})
module.exports = router;
