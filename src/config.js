require('dotenv').config()

    //!VARIABLES DE ENTORNO    
    const config = {
        node_env: process.env.NODE_ENV, 
        port: process.env.PORT,

        bd: {
            type: process.env.DB_TYPE ,
            host: process.env.DB_HOST ,
            user: process.env.DB_USER ,
            pass: process.env.DB_PASS ,
            name: process.env.DB_NAME ,
        }
    };


//! use a  database.js
module.exports = config;