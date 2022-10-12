const uuid = require('uuid');

//! FILE
//? Requerir el modelo para ejecutar acciones a nuestra data base.
const products = require('../models/products.model');


    //! Controllers
    const getAllProduct = async () => {
        const data = await products.findAll();
        return data
    };


    const createProduct = async (data) => {
        const product = await products.create({
            id: uuid.v4(),
            name: data.name,
            category: data.category,
            price: data.price,
            isAvailable: data.isAvailable,
        });
        return product
    };


    const getProductById = async (idParams) => {
        const data = await products.findOne({
            where: {
                id: idParams
            }
        });
        return data
        //? Si where no encuentra nada, nos arroja null.
    };


    const editProduct = async (id_params, data) => {
        const response = await products.update(data, {
            where: {
                id: id_params
            }
        });
        return response;
        //? Si where no encuentra nada, nos arroja null.
    };


    const deleteProduct = async (id_params) => {
        const data = await products.destroy({
            where: {
                id: id_params
            }
        });
        return data;
        //? Si where no encuentra nada, nos arroja null.
    };


//! TODO LO QUE MANEJA LA BBDD, LAS ACTIONS
//? Las actions la reciben los services
module.exports = {
    getAllProduct,
    createProduct,
    getProductById,
    editProduct,
    deleteProduct
}