const mongoose = require('mongoose');

const User = mongoose.model('user');

module.exports = {
    async index(req,res){
        const { page = 1 } = req.query;
        const users = await User.paginate({},{ page, limit:5});
        
        return res.json(users);
    },
    async store(req,res){
        const user = await User.create(req.body);

        return res.json(user);
    },
    async show(req,res){
        const user = await User.find({Username: req.params.name});

        return res.json(user);
    },
    async update(req,res){
        const user = await User.findByIdAndUpdate({Username: req.params.name}, req.body, {new : true});

        return res.json(user);
    },
    async delete(req,res){
        await User.findOneAndRemove({Username: req.params.name});

        return res.send(`User ${req.params.id} delected`);
    },
    async authenticate(req,res){
        const user = await User.find({Username:req.body.Username});
        //res.send(user);
        const pass = user[0].Password;
        if(req.body.Password === pass){
            return res.send("Logged in!");
        }else{
            return res.send("Username/Password is Wrong!");
        }

    }
}