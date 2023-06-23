// importo el modulo de mongoose
const mongoose = require('mongoose')
// accedo la ruta de mi archivo de variables 
require('dotenv').config({ path: 'variables.env' });

//conectar a mi DB 
const concetionDB = async () => {
    //usare un try por si sucede algun error
    try {
        //configuramos la conexion
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.info('DB conectada correctamente')
    } catch (error) {
        console.warn(`Ha ocurrido algo en la conexion ${error}`)
        //detenemos el proceso
        process.exit(1)
    }
}

module.exports = concetionDB;