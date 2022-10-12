const express = require('express');

//! Initial config
const app = express();
app.use(express.json());

//! Files
//  data base 
const bd = require('./utils/dataBase');

//  Models
const initModels = require ('./models/initModels')

//  Router de verbos http 
const productRouter = require('./products/products.router');

//  Puerto de mi app
const {port} = require('./config');


    //! Check database conection     
    bd.authenticate()
    .then(() => console.log('BD authentication succesly.'))
    .catch(err => console.log(err));

    //! Synchronize database
    bd.sync()
    .then(() => console.log('BD sync succesly.'))
    .catch(err => console.log(err));

    //! Models 
    initModels();

    app.use('/product', productRouter)


app.listen(port,() => {
    console.log(`Stard server at port ${port}.`);
});
