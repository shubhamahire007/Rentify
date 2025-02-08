const mongoose = require('mongoose')
const Listing = require('../models/listing.js')
const init_data  = require('./data.js')

main()
    .then(() => {console.log("connected to DB")})
    .catch((err) => {console.log(err)})

async function main() {
    await mongoose.connect("mongodb://localhost/rentify")
}

const initDB = async () => {
    await Listing.deleteMany({})
    init_data.data = init_data.data.map((obj) => ({...obj, owner:"674c922513578ccad5d6c96e"}))
    await Listing.insertMany(init_data.data)
    console.log("data was initialized")
}

initDB()