const express = require('express');
const routes = express.Router();

// USER ROUTES
const UserController = require('./controllers/UserController');

routes.get('/users', UserController.index);
routes.get('/users/:name',UserController.show);
routes.post('/users/login',UserController.authenticate);
routes.post('/users_create',UserController.store);
routes.put('/users/:name',UserController.update);
routes.delete('/users/:name',UserController.delete);



// PRODUCT ROUTES
const ProductController = require('./controllers/ProductController');

routes.get('/products',ProductController.show);
routes.get('/products/:name',ProductController.search);
routes.post('/products_store',ProductController.store);
routes.put('/products/:name',ProductController.update_quantity);
routes.delete('/products/:name',ProductController.remove);


module.exports = routes;