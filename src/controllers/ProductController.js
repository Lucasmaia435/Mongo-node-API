const mongoose = require('mongoose');

const Product = mongoose.model('product');

module.exports = {
    async show(req,res){
        const product = await Product.find();
        
        return res.json(product);
    },
    async store(req,res){
        const product = await Product.create(req.body);

        return res.json(product);
    },
    async search(req,res){
        const product = await Product.find({Name: req.params.name});

        return res.json(product);
    },
    async update_quantity(req,res){
        const product = await Product.findOneAndUpdate({Name:req.params.name}, req.body, {new : true});
        
        return res.json(product);
    },
    async remove(req,res){
        await Product.findOneAndRemove({Name: req.params.name});

        return res.send(`Product ${req.params.id} delected`);
    }
}