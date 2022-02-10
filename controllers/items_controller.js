var Items = require("../models/item");
var Category = require("../models/category");
var async = require("async");

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
      res.render("item_detail", { title: item.name, item: item });
    });
};

exports.item_update = function (req, res, next) {
  async.parallel(
    {
      items: function (callback) {
        Items.findById(req.params.id).populate("category").exec(callback);
      },
      categories: function (callback) {
        Category.find().exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      res.render("item_update", {
        title: "UPDATE " + results.items.name,
        item: results.items,
        categories: results.categories,
      });
    }
  );
};

exports.item_update_send = function (req, res, next) {
  console.log("updating");
  Items.findByIdAndUpdate(
    { _id: req.params.id },
    {
      name: req.body.nameInput,
      description: req.body.descriptionInput,
      price: parseFloat(req.body.priceInput.replace("£", "")),
      quantity: req.body.quantityInput,
      category: req.body.categoryInput,
    },
    function (err, update) {
      res.redirect("/");
    }
  );
};

exports.item_delete = function (req, res, next) {
  Items.findOneAndDelete({ _id: req.params.id }, function (err, update) {
    res.redirect("/");
  });
};

exports.item_create = function (req, res, next) {
  Category.find().exec((err, categories) => {
    res.render("item_create_form", {
      title: "Create New Item",
      categories: categories,
    });
  });
};

exports.item_create_send = function (req, res, next) {
  Items.create(
    {
      name: req.body.nameInput,
      description: req.body.descriptionInput,
      price: parseFloat(req.body.priceInput.replace("£", "")),
      quantity: req.body.quantityInput,
      category: req.body.categoryInput,
      picture: req.body.pictureInput,
    },
    function () {
      res.redirect("/");
    }
  );
};
