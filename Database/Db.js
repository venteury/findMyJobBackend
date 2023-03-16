const mongoose = require('mongoose')
const url = process.env.MONGODB_URL
// const url = 'mongodb://127.0.0.1:27017/test'

const Connection = async ()=>{
    try{
        mongoose.connect(url)
        console.log('mongodb connected');
    }catch(err){
        console.log(err);
    }
}

module.exports = Connection;