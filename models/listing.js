const mongoose = require('mongoose')
const Review = require('./review')
const User = require('../models/user')

const Schema = mongoose.Schema

const listingSchema = new Schema({
    title:String,
    description:String,
    image:{
        url:String,
        filename:String
    },
    price:Number,
    location:String,
    propertyType:String,
    country:String,
    contact:Number,
    reviews:[{
        type:Schema.Types.ObjectId,
        ref:"Review"
    }],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})

listingSchema.post("findOneAndDelete", async(listing) => {
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}})
    }
})

const Listing = mongoose.model("Listing",listingSchema)

module.exports = Listing;