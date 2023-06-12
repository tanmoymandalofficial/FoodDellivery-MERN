const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://gofood:tanmoy@cluster0.qvrm1la.mongodb.net/?retryWrites=true&w=majority"

const mongoDB = async ()=>{
    console.log('riched');
    await mongoose.connect(mongoURI)
}
mongoDB().then(aa => console.log('conected')).catch(err => console.log(err))
module.exports = mongoDB;