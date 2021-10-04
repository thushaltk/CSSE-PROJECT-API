const Item = require('../models/item');

const addItem = async (req, res) => {
    const newItem = new Item({
        itemname: req.body.itemName,
    });

    try{
        await newItem.save();
        console.log("New Item Added Successfully!");
        res.status(201).json({success: true, data: newItem});
    }catch(error){
        res.send('error occured');
    }
};

const getAllItems = async (req, res) => {
    let items;

    try{
        items = await Item.find();
        console.log("Items retrieved successfully!!");
        res.send(items);
    }catch(error){
        res.send('not found');
    }
};

const deleteItem = async (req, res) => {
    try{
        await Item.findByIdAndDelete(req.params.id);
        res.send('deleted');
    }catch(error){
        res.send('error occured');
    }
}

module.exports = {
    addItem,
    getAllItems,
    deleteItem
}