const mongoose = require('mongoose');

const connectDb = (url)=>{
    mongoose.connect(url).then(()=>{
        console.log("database connectin success");
    }).catch((err)=>{
        console.log("database connectin error");
    })
}

module.exports = {connectDb};