require('dotenv').config()

const cloudinary=require('cloudinary').v2

console.log(cloudinary.config().cloud_name)

cloudinary.uploader.upload('img2.jpg',{ folder: "codehelp/", 
public_id: "life" })
.then((result)=>{
    console.log('success')
})
.catch((err)=>{
    console.error(err)
})