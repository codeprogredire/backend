const express=require('express')

const app=express()

//load config from env file
require('dotenv').config()
const PORT=process.env.PORT || 3000

//middleware to parse request body
app.use(express.json())

//Import routes for Todo API
const todoRoutes=require('./routes/todos')
//mount the todo API routes
app.use('/api/v1',todoRoutes)


app.listen(PORT,()=>{
    console.log('App started running successfully')
})

//connect to database
const dbConnect=require('./config/database')
dbConnect()

//Default route
app.get('/',(req,res)=>{
    res.send('<h1>This is homepage of TODO API</h1>')
})