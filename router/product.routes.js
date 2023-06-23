const express = require('express');
const controllers = require('../controllers/controllers');
const route = express.Router();

//api/product
route.post('/', controllers.createProduct)
route.get('/', controllers.listProduct)
route.put('/:id', controllers.updateProduct)
route.get('/:id', controllers.product)
route.delete('/:id', controllers.deleteProduct)
module.exports = route;