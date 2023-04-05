const mongoose = require('mongoose');

const travellerSchema = new mongoose.Schema({
    name:String,
    email:String,
    destination:String,
    travellers:Number,
    budget:Number
    
})

const TravellerModel=mongoose.model('traveller',travellerSchema);

module.exports={TravellerModel}