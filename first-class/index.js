const express=require('express')

const mongoose=require('mongoose')

const app=express()

mongoose.connect('mongodb+srv://kislay1854:iR_3g%3D7sKs3TEbq@cluster0.x85epwn.mongodb.net/users_app')
.then(()=>{console.log('connection successful')})
.catch((err)=>{console.log('received an error')})

app.use(express.json())

app.get('/',function(req,res){
    res.send('Hello')
})

app.post('/api/cars',function(req,res){
    const {name,brand}=req.body
    res.send('Car added successfully')
})

app.listen(3000)