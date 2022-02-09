var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CatergorySchema = new Schema({
  name: { type: String },
  description: { type: String },
});

CatergorySchema.virtual("url").get(function () {
  return "/inventory/catalog" + this._id;
});

module.exports = mongoose.model("Category", CatergorySchema);
