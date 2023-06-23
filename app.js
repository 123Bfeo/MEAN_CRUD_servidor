const express = require('express');
const routerProducts = require('./router/product.routes')
const cors = require('cors')
//archivo de configuracion DB
const concetionDB = require('./config/db')
const app = express();

// Conexion a DB
concetionDB();
//cors 
app.use(cors())
//habilitar el uso de Json
app.use(express.json())
//Definiendo rutas
app.use('/api/products', routerProducts)

//Levantar el servidor 
const port = 4000;
app.listen(port, () => {
    console.log(`the server is running on ${port} 😎🏃`)
})