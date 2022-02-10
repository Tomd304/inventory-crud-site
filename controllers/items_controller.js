var Items = require("../models/item");
var Category = require("../models/category");

// MAIN PAGE / - SHOWS LIST OF ALL ITEMS
exports.index = (req, res, next) => {
  Items.find()
    .populate("category")
    .sort("category")
    .exec((err, items) => {
      res.render("inventory", { title: "Inventory", items: items });
    });
};

// ITEM DETAIL PAGE /item/:id - SHOWS ITEM DETAIL
exports.item_detail = (req, res, next) => {
  Items.findById(req.params.id)
    .populate("category")
    .exec((err, item) => {
      console.log(item);
      res.render("item_detail", { title: item.name, item: item });
    });
};
