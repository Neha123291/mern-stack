import express from 'express';
import Product from '../models/Product.js';
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from '../controllers/products.controller.js';
const router = express.Router();
router.get('/', authMiddleware, getAllProducts);
router.get('/:id', authMiddleware, getProductById);
router.post('/', authMiddleware, createProduct);
router.put('/:id', authMiddleware, updateProduct);
router.delete('/:id', authMiddleware, deleteProduct);

export default router; 