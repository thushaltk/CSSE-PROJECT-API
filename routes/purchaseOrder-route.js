const express = require("express");
const router = express.Router();

const purchaseOrderController = require("../controllers/purchaseOrder-controller");

router.post('/add-purchase-order', purchaseOrderController.addPurchaseOrder);
router.get('/get-purchase-orders/:sitemanager', purchaseOrderController.getPurchaseOrdersBySiteManager);
router.get('/get-all-purchase-orders', purchaseOrderController.getPurchaseOrders);
router.put('/update-order', purchaseOrderController.updatePurchaseOrder);
router.patch('/update-status', purchaseOrderController.updateStatus);


module.exports = router