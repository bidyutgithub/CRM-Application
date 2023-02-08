const mongoose = require('mongoose')
const { stringify } = require('querystring')


// Run the following line to connect
mongoose.connect("mongodb://localhost:27017/marutiSuzuki",
    () => { console.log("Connected To MongoDB") },
    err => { console.log("Error :", err.message) })

    let EngineSchema = mongoose.Schema({horsePower:Number,
                                        CC : Number})

    let carSchema = mongoose.Schema({
              brand :String,
              model :{
                type:String,
                validate: {
                    validator : s => s.length > 5,
                    message : props => `${props.value} model name is too short`
                }
             },
              Engine :EngineSchema
      })

       let cars = mongoose.model('Cars',carSchema) 

   cars.create({
            brand: "Maruti Suzuki",
            model: "balenos",
  })
   cars.create({brand :"Maruti",
               model :"Swift",
               Engine :{horsePower: 700, CC:1455}})
               .then(data => console.log("success"))
               .catch(err => console.log("Error"))

  let id = mongoose.Types.ObjectId("63a3301c4d0ad6359a25e933")
  
  let update = cars.updateOne({_id:id},
        {brand :"Marcidize", $inc:{__v:1} })
   
     update.then(console.log)
        .catch(console.log)

        const search = async function (id) {
            try {
                const myCar = await cars.findOne({ _id: id })
        
                console.log(myCar)
            } catch (err) {
                console.log(err)
            }
        }
        
        search(id).then(() => console.log("found!!"))