const AssignedSuppliers = require('../models/assigned-suppliers');

const addAssignedSuppliers = async (req, res) => {
    const newAssignedSupplier = new AssignedSuppliers({
        purchaseOrderID: req.body.purchaseOrderID,
        itemname: req.body.itemname,
        supplier: req.body.supplier,
        quantity: req.body.quantity,
        deadline: req.body.deadline,
        budget: req.body.budget
    });

    try{
        await newAssignedSupplier.save();
        console.log("Assigned Supplier added successfully");
        res.status(201).json({success: true, data: newAssignedSupplier});
    }catch(error){
        res.send({success: false, message: error});
    }
}

const getAllAssignedSuppliers = async (req, res) => {
    let assignedSuppliers;

    try{
        assignedSuppliers = await AssignedSuppliers.find().populate('supplier').populate('itemname');
        res.status(200).json({assignedSuppliers});
    }catch(error){
        res.send({error: true, message: error});
    }
}

const getAssignedSuppliersByPurchaseOrderID = async (req, res) => {
    let assignedSuppliers;
    try{
        assignedSuppliers = await AssignedSuppliers.find({purchaseOrderID: req.params.id}).populate('itemname').populate('supplier');
        if(assignedSuppliers){
            res.status(200).json(assignedSuppliers);
        }else{
            res.send("not found");
        }
    }catch(error){
        res.send(error)
    }
}

module.exports = {
    addAssignedSuppliers,
    getAllAssignedSuppliers,
    getAssignedSuppliersByPurchaseOrderID
}