const router = require('express').Router();
const productsServices = require('./products.services')

//Devolvemos todos los productos.
router.get('/', productsServices.getAllProduct);

//Creamos un producto.
router.post('/', productsServices.createProduct);

//Obtener product por ID.
router.get('/:id', productsServices.getProductById);

module.exports = router;
//Modificar un producto.
router.patch('/:id', productsServices.pathMovie);

//Eliminar un producto
router.delete('/:id', productsServices.deleteMovie);