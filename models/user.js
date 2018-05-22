const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    key: {
        type: String,
        required: true
    },
      value: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Number,
        default: Date.now
    }
});

const User=mongoose.model('user', userSchema);
module.exports=User;
