const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    Name:{
        type:String,
        required: true,
    },
    Qnt:{
        type:String,
        required: true,
    },
    Description:{
        type:String,
        required: true,
    },
});

mongoose.model('product', ProductSchema);
