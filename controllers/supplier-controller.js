const Supplier = require('../models/supplier');

const addNewSupplier = async (req, res) => {
    const newSupplier = new Supplier({
        name: req.body.name,
        location: req.body.location,
        contact: req.body.contact,
        registerDate: req.body.registerDate,
        status: req.body.status
    });

    try{
        await newSupplier.save();
        console.log("New Supplier Added!");
        res.status(201).json({success: true, data: newSupplier});
    }catch(error){
        res.send('error occured');
    }
}

const getAllSuppliers = async (req, res) => {
    let suppliers;
    try{
        suppliers = await Supplier.find();
        console.log("Supplier data retrived successfully!");
        res.send({success: true, data: suppliers});
    }catch(error){
        res.send("error occured");
    }
}


const getApprovedSuppliers = async (req, res) => {
    let suppliers;
    try{
        suppliers = await Supplier.find({status: 'APPROVED'});
        console.log("Supplier data retrived successfully!");
        res.send({success: true, data: suppliers});
    }catch(error){
        res.send("error occured");
    }
}

const updateStatus = async (req, res) => {
    const {id, status} = req.body;
    let supplier;
    try{
        supplier = await Supplier.findById(id);
        if(supplier){
            supplier.status = status;
            await supplier.save();
            res.status(200).json({success: true, data: supplier})
        }else{
            res.send({success: false})
        }
    }catch(error){
        res.send(error);
    }
}


module.exports = {
    addNewSupplier,
    getAllSuppliers,
    getApprovedSuppliers,
    updateStatus
}