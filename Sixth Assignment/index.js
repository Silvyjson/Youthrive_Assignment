const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')
const {getProductInventory, postProductInventory, updateProductInventory, deleteProductInventory} = require('./src/controllers')

const PORT = process.env.PORT || 5500
const MONGODB_URL = process.env.MONGODB_URL

const app = express();

app.use(express.json());

mongoose.connect(MONGODB_URL).then(() => console.log('Connected to mongodb...'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/getPI', getProductInventory )
app.post('/postPI', postProductInventory)
app.put('/putPI/:id', updateProductInventory)
app.patch('/patchPI/:id', updateProductInventory)
app.delete('/deletePI/:id', deleteProductInventory)


