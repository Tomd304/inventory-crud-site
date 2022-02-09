var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  quantity: { type: Number },
  category: [{ type: Schema.Types.ObjectID, ref: "Category" }],
  picture: { type: String },
});

ItemSchema.virtual("url").get(function () {
  return "/inventory/item" + this._id;
});

ItemSchema.virtual("price_formatted").get(function () {
  return "£" + this.price.toFixed(2);
});

module.exports = mongoose.model("Item", ItemSchema);
