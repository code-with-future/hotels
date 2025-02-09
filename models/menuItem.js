const { uniq } = require("lodash");
const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  taste: {
    type: String,
    enum:["spicy","sweet","saulty"],
    require: true,
  },
  is_drink: {
    type: Boolean,
    require: true,
  },
  ingredients: {
    type: [String],
    require: true,
  },
  num_sales: {
    type: Number,
    require: true,
  },
});

const menuItem = mongoose.model("menuItem", menuItemSchema);
module.exports = menuItem;
