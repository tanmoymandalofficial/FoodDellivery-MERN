const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://gofood:tanmoy@cluster0.qvrm1la.mongodb.net/gofood?retryWrites=true&w=majority"

const mongoDB = async ()=>{
    console.log('riched');
    try {
        await mongoose.connect(mongoURI);
        console.log('connected');

    } catch (error) {
        console.log('---',error)
    }
}
mongoDB().then(async () => {
    // console.log('conected');

        const fetched_data = await mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        const foodCategory = await mongoose.connection.db.collection("food_category");
        const catData = await foodCategory.find({}).toArray();
        console.log(catData);


        global.food_item = data;
        global.foodCategory = catData;
        // console.log(global.food_item);

}).catch(err => console.log(err))



module.exports = mongoDB;




// --------------------------***********-----------------------
// const mongoDB = async () => {
//     try {
//       await mongoose.connect(mongoURI);
//       console.log('Connected!');
//       let fetched_data = mongoose.connection.db.collection("food_items");
//       let data= await fetched_data.find({}).toArray() 
//       console.log(data);
//     } catch (error) {
//       console.log('err: ', error);
//     }
//   };