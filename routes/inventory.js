var express = require("express");
var router = express.Router();
var items_controller = require("../controllers/items_controller");
var categories_controller = require("../controllers/categories_controller");

/* GET home page. */
router.get("/", items_controller.index);

router.get("/item/:id", items_controller.item_detail);

router.post("/item/:id/update", items_controller.item_update_send);

router.get("/item/:id/update", items_controller.item_update);

router.get("/item/:id/delete", items_controller.item_delete);

router.get("/category/:id", categories_controller.category_list);

router.get("/create", items_controller.item_create);

router.post("/create", items_controller.item_create_send);

module.exports = router;
