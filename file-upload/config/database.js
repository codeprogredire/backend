const mongoose=require('mongoose')

require('dotenv').config()

exports.connect = ()=>{
    mongoose.connect(process.env.URL)
    .then(console.log('DB connection successful'))
    .catch((err)=>{
        console.log('DB connection issues')
        console.error(err)
        process.exit(1)
    })
}