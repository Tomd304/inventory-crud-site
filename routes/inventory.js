var express = require("express");
var router = express.Router();
var items_controller = require("../controllers/items_controller");

/* GET home page. */
router.get("/", items_controller.index);

module.exports = router;
