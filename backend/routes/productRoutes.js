const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const validate = require('../middleware/zodMiddleware');
const productValidation = require('../utils/productValidation'); 

router.post('/product',validate(productValidation),productController.addProduct);
router.get('/product',productController.getAllProduct);
router.get('/product/:id',productController.getProductById);
router.post('/product/:id',productController.updateProductById);
router.delete('/product/:id',productController.deleteProductById);

module.exports = router;