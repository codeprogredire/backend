const express=require('express')

const app=express()

require('dotenv').config()
const PORT=process.env.PORT

app.use(express.json())

const fileupload=require('express-fileupload')
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))

//mount route
const Upload=require('./routes/FileUpload')
app.use('/api/v1/upload',Upload)

app.listen(PORT,()=>{
    console.log('App is running successfully')
})

const db=require('./config/database')
db.connect()