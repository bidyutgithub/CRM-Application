Install Mongoose cd ./5. Using Mongoose(19th Dec 2022)

npm install mongoose --save
npm init
Import Mongoose module Create an index.js file and add: const mongoose = require('mongoose')

## Connect to MongoDB from program file.
   mongoose.connect("mongodb://localhost:27017", () => { 
    console.log("Connected To MongoDB") },
     err => { console.log("Error :", err.message) })

Create Data Model

new mongoose.schema()
new mongoose.model()
let cars = mongoose.model('Cars', mongoose.Schema({ brand: String, model: String }))

Do CRUD operations on data model

cars.create({ "brand": "Maruti", "model": "Swift" }) .then(console.log) .catch(console.log)