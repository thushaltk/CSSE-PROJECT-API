const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./db/index');

//Route imports
const purchaseOrderRoutes = require('./routes/purchaseOrder-route');
const supplierRoutes = require('./routes/supplier-route');
const itemRoutes = require('./routes/item-route');
const assignedSupplierRoutes = require('./routes/assignedSuppliers-route');


const app = express();

const API_PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

db.on('error', console.error.bind(console, 'MongoDB Connection Error:'));


//Routes
app.use('/api/purchase-order', purchaseOrderRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/assigned-supplier', assignedSupplierRoutes);


app.listen(API_PORT, () => console.log(`Server is running on port ${API_PORT}`));