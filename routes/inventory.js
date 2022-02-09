let express = require("express");
let router = express.Router();
let items_controller = require("../controllers/items_controller");

/* GET home page. */
router.get("/", items_controller.index);

module.exports = router;
