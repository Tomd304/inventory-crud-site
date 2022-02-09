var Items = require("../models/item");

// MAIN PAGE / - SHOWS LIST OF ALL ITEMS
exports.index = (req, res, next) => {
  Items.find().exec((err, items) => {
    res.render("inventory", { title: "Inventory", items: items });
  });
};

// ITEM DETAIL PAGE /item/:id - SHOWS ITEM DETAIL
exports.item_detail = (req, res, next) => {
  Items.findById(req.params.id).exec((err, item) => {
    res.render("item_detail", { title: item.name, item: item });
  });
};
