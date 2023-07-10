const express = require('express');
const Router = express.Router();

Router.post('/foodData', (req, res)=>{
    try {
        res.send([global.food_item, global.foodCategory])
        // console.log(global.food_item)


    } catch (error) {
        console.error(error)
    }
})


module.exports = Router;