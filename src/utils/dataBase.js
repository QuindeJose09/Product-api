const {Sequelize} = require('sequelize');

//! File
//? Requerir de mis variables de entorno que se encuentran en config.js
const config = require('../config');

const {type, host, user, pass, name}  = config.bd

    //? Configuraciones para conectar con la data base.
    const bd = new Sequelize({
        dialect: type,
        host: host,
        username: user,
        password: pass,
        database: name,
    });


module.exports = bd;