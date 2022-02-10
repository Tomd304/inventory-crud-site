var Items = require("../models/item");
var Category = require("../models/category");

exports.category_list = function (req, res, next) {
  Items.find({ category: req.params.id })
    .populate("category")
    .sort("category")
    .exec((err, items) => {
      res.render("category_list", {
        title: items[0].category.name,
        items: items,
      });
    });
};
