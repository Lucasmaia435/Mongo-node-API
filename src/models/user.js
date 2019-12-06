const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    Username:{
        type:String,
        required: true,
    },
    Password:{
        type:String,
        required: true,
    },
    Room:{
        type:String,
        required: true,
    },
    Access:{
        type:String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

UserSchema.plugin(mongoosePaginate);

mongoose.model('user', UserSchema);
