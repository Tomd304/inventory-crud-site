let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let CatergorySchema = new Schema({
  name: { type: String },
  description: { type: String },
});

CatergorySchema.virtual("rl").get(() => {
  return "/inventory/catalog" + this._id;
});

module.exports = mongoose.model("Category", CatergorySchema);
