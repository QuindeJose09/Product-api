const { DataTypes } = require('sequelize');

//! File
//? Requerir de mi data base
const bd = require('../utils/dataBase');

    //? Definir modelo o tabla de mi database.
    const products = bd.define('product',{
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            allowNull: false
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        category: {
            type: DataTypes.STRING,
            allowNull: false
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: DataTypes.false
        },

        isAvailable: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });

    //? El modelo usarlo en initModels.js 
module.exports = products;