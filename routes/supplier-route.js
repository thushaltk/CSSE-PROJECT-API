const express = require('express');
const router = express.Router();

const supplierController = require('../controllers/supplier-controller');

router.post("/add-supplier", supplierController.addNewSupplier);
router.get("/get-all-suppliers", supplierController.getAllSuppliers);
router.get("/get-approved-supplers", supplierController.getApprovedSuppliers);
router.patch("/update-status", supplierController.updateStatus);

module.exports = router;