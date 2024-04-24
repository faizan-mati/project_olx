import express from "express";
import Product from "../model/prodect.mjs";
import { useParams } from 'react-router-dom';


const router = express.Router();

console.log("router Product");

// ============= Get ==================
router.get('/', async (req, res) => {

    try {
        const add = await Product.find();
        res.send({ message: 'user fetched successfully!', data: add });
    } catch (error) {
        res.status(500).send({ message: 'Error fetching products!', error: error.message });
    }
});

// ============= product add ==================

// fetch('http://localhost:3001/product/add', {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json" 
//     },
//     body: JSON.stringify({ 
//         brandName: "faizan",
//         deliveryTime: "faizanmatee1@gmail.com",
//         itemCondition: "12345678",
//     })
// })
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(error => console.error('Error:', error));

router.post('/add', async (req, res) => {
    try {
        // Assuming req.body contains the product data
        const newProduct = await Product.create(req.body); // Create new product

        res.status(201).send({ message: 'Product added successfully!', product: newProduct });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
})


// ============= product detail ==================

router.get('/:addId', async (req, res) => {
    // const { addId } = useParams();
    // console.log("product detail", addId);
    try {
        const ID = req.params.addId;
        const product = await Product.findById(ID);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product fetched successfully', data: product });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error: error.message });
    }
});


// ============= My product =================

router.get('/myadd/:id', async (req, res) => {
    const userId = req.params.id; // Extract user ID from the request URL

    try {
        // Find ads by user ID using Mongoose
        const ads = await Product.find({ userId: userId });

        if (!ads) {
            return res.status(404).json({ message: "No ads found for this user" });
        }

        return res.status(200).json({ message: "Success", data: ads });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});


// Delete a product
// fetch('http://localhost:3001/product/delete/660a60d003581f88765b8e66', {
//     method: 'DELETE',
// })
// .then(res => res.json())
// .then(res => console.log(res))
// .catch(error => console.error('Error:', error));


router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            res.status(404).send({ message: 'Product not found!' });
        } else {
            res.send({ message: 'Product deleted successfully!' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error deleting product!', error: error.message });
    }
});


export default router;