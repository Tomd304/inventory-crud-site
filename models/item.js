let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ItemSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  quantity: { type: Number },
  category: [{ type: Schema.Types.ObjectID, ref: "Category" }],
  picture: { type: String },
});

ItemSchema.virtual("url").get(() => {
  return "/inventory/item" + this._id;
});

module.exports = mongoose.model("Item", ItemSchema);
