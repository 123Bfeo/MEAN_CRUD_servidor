const Product = require("../model/Product");

const controllers = {
    createProduct: async (req, res) => {
        try {
            //creacion del producto
            let product;
            product = new Product(req.body)
            //guardo la data de product
            let response = await product.save();
            console.log(response)
            res.send(product);
        } catch (error) {
            console.warn(`Algo salio mal: ${error}`)
            res.status(500).send('Algo salio mal createProduct')
        }
    },
    listProduct: async (req, res) => {
        try {
            //vamos a realizar un llamdao de la lita de productos en DB
            const product = await Product.find();
            res.json(product);
        } catch (error) {
            console.warn(`Algo salio mal: ${error}`)
            res.status(500).send('Algo salio mal listProduct')
        }
    },
    updateProduct: async (req, res) => {
        try {
            // desestructuramos lo que nos envia el usuario
            const { product, category, mark, price } = req.body;
            // buscamos el producto en base de datos
            let products = await Product.findById(req.params.id);
            console.log(products)
            if (!products) {
                res.status(404).json({ msg: 'no existe el producto' })
            } else {
                products.product = product;
                products.category = category;
                products.mark = mark;
                products.price = price;

                // acatualizar en base de datos
                products = await Product.findOneAndUpdate({ _id: req.params.id }, products, { new: true })
                res.json(products)
            }
        } catch (error) {
            console.warn(`Algo salio mal: ${error}`)
            res.status(500).send('Algo salio mal updateProduct')
        }
    },
    product: async (req, res) => {
        try {
            let product = await Product.findById(req.params.id)
            if (!product) {
                res.status(404).json({ msg: 'no existe el producto' })
            }
            else {
                res.json(product)
            }
        } catch (error) {
            console.warn(`Algo salio mal: ${error}`)
            res.status(500).send('Algo salio mal product')
        }
    },
    deleteProduct: async (req, res) => {
        try {
            let product = await Product.findById(req.params.id)
            if (!product) {
                console.warn(`Algo salio mal: ${error}`)
                res.status(500).send('Algo salio mal product')
            } else {
                await Product.findOneAndRemove({ _id: req.params.id });
                res.json({ msg: 'Product delete exit' })
            }

        } catch (error) {
            console.warn(`Algo salio mal: ${error}`)
            res.status(500).send('Algo salio mal deleteProduct')
        }
    }
}

module.exports = controllers;
