const PurchaseOrder = require('../models/purchase-order');


const addPurchaseOrder = async (req, res) => {
    console.log(req.body);
    const newPurchaseOrder = new PurchaseOrder({
        sitename: req.body.sitename,
        location: req.body.location,
        sitemanager: req.body.sitemanager,
        order: req.body.order,
        date: req.body.date,
        status: "PENDING",
        total: 0
    });

    try{
        await newPurchaseOrder.save();
        console.log("Purchased order added successfully!!!");
        res.status(201).json(newPurchaseOrder);
    }catch(error){
        res.status(400).json({error: error, message: 'data not added'})
    }
};

const getPurchaseOrders = async (req, res) => {
    let purchaseOrders;
    try{
        purchaseOrders = await PurchaseOrder.find().populate('order');
        res.status(200).json({success: true, data: purchaseOrders});
    }catch(error){
        res.status(404).json({message: 'not found'});
    }
};

const getPurchaseOrdersBySiteManager = async (req, res) => {
    let purchaseOrders;
    try{
        purchaseOrders = await PurchaseOrder.find({sitemanager: req.params.sitemanager}).populate('order');
        res.status(200).json(purchaseOrders);
    }catch(error){
        res.send(error);
    }
};

const updatePurchaseOrder = async (req, res) => {
    const {id, status, total} = req.body;
    let purchaseOrder;
    try{
        purchaseOrder = await PurchaseOrder.findById(id);
        if(purchaseOrder){
            purchaseOrder.status = status;
            purchaseOrder.total = total;
            await purchaseOrder.save();
            console.log("Purchase order updated successfully!")
            res.status(200).json({success: true, message: "Purchase order updated successfully!"});
        }else{
            res.status(404).json({message: 'not found'});
        }
    }catch(error){
        res.send({message: 'error occrued'});
    }
};

const updateStatus = async (req, res) => {
    const {id, status} = req.body;
    let purchaseOrder;
    try{
        purchaseOrder = await PurchaseOrder.findById(id);
        if(purchaseOrder){
            purchaseOrder.status = status;
            await purchaseOrder.save();
            console.log("Purchase order updated successfully!")
            res.status(200).json({success: true, message: "Purchase order updated successfully!"});
        }else{
            res.status(404).json({message: 'not found'});
        }
    }catch(error){
        res.send({message: 'error occrued'});
    }
}

module.exports = {
    addPurchaseOrder,
    getPurchaseOrders,
    updatePurchaseOrder,
    getPurchaseOrdersBySiteManager,
    updateStatus
}