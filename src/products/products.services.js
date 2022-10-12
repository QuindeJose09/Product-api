 //! Controllers
const productsControllers = require('./products.controllers');


    const getAllProduct = (request,response) => {
        productsControllers.getAllProduct()
        .then(data => {
            response.status(200).json(data)
        })
        .catch(err => {
            response.status(400).json(err)
        });
    }


    const createProduct = (request, response) => {
        const body = request.body;
        console.log(body);
        productsControllers.createProduct(body)
        .then(res => {
            response.status(201).json(res)
        })
        .catch((err) => {
            response.status(400).json( {message: err.message} )
        })
    }


    const getProductById = (request,response) => {
        const id = request.params.id;

        productsControllers.getProductById(id)
        .then(data => {
            if(data) {
                response.status(200).json(data)
            } else {
                response.status(400).json({ message: 'Invalid ID.'})
            }
        })
        .catch((err) => {
            response.status(400).json({response: 'Invalid ID'})
        })
    }


    //? Modificación parcial
    const pathMovie = (request, response)  => {
        const id = request.params.id;
        const { name, category, price, isAvailable} = request.body;

        productsControllers.editProduct(id, { name, category, price, isAvailable })
        .then(res => {
                //! [0] , [1]
                if(res[0]){
                    response.status(200).json({
                        message: `Product with id: ${id}, edited succesfully! `
                    })
                } else {
                    response.status(400).json({ message: 'Invalid ID.'})
                }
        })
        .catch(err => {
            res.status(400).json({ message: err.message})
        });
    };

    
    const deleteMovie = (request,response) => {
        const id = request.params.id;

        productsControllers.deleteProduct(id)
        .then(res => {
            if(res){
                response.status(204).json(res)
            } else {
                response.status(400).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
    };


module.exports = {
    getAllProduct,
    createProduct,
    getProductById,
    pathMovie,
    deleteMovie
}
