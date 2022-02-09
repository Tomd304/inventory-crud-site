let Items = require("../models/item");

exports.index = (req, res, next) => {
  Items.find().exec((err, items) => {
    console.table(items);
    res.render("inventory", { title: "Inventory", items: items });
  });
};
