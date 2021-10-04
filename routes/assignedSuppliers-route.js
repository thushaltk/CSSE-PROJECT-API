const express = require('express');
const router = express.Router();

const assignedSuppliersController = require('../controllers/assigned-suppliers-controller');

router.post("/add-assigned-supplier", assignedSuppliersController.addAssignedSuppliers);
router.get("/get-all-assigned-supplier", assignedSuppliersController.getAllAssignedSuppliers);
router.get("/get-assigned-by-id/:id", assignedSuppliersController.getAssignedSuppliersByPurchaseOrderID);

module.exports = router;