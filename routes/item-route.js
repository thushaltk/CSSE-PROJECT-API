const express = require('express');
const router = express.Router();

const itemController = require('../controllers/item-controller');

router.post("/add-item", itemController.addItem);
router.get("/get-all-items", itemController.getAllItems);
router.delete("/delete-item/:id", itemController.deleteItem);

module.exports = router;