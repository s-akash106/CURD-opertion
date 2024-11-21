const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Product = require('./models/product.module');
const product = require('./models/product.module');

app.use(express.json());

app.use(express.urlencoded({ extended: false }));



app.get('/', (req, res) => {
    res.send("hello from node api");
});

// get read all elements 
app.get('/api/products', async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});






// adding product

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// update product

app.put('/api/product', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// delete api or product
app.delete('/api/product : id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log('ID received:', id);
        const product = await product.findByIdAndDelete(id);
        if (!product) {
            return res.sendStatus(404).json({ message: "product not found" });

        }
        res.status(200).json({ message: "product deleted succefully" });
      
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




mongoose.connect("mongodb+srv://akashsuryavanshi8900:QqI80pVIN2jrWL5j@backenddp.k62kp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backenddp")
    .then(() => {
        console.log("connected to database");

        app.listen(3000, () => [
            console.log("server is running on 3000")
        ]);
    })
    .catch(() => {
        console.log("conection failed");
    })