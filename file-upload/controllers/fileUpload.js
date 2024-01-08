const File=require('../models/File')
require('dotenv').config()
const cloudinary=require('cloudinary').v2

async function uploadFileToCloudinary(file,folder){
    console.log(file.tempFilePath)
    return await cloudinary.uploader.upload(file.tempFilePath,{folder:folder}) 
}

//localFileUpload request handler
exports.localFileUpload=async (req,res)=>{
    try{
        //fetch file
        const file=req.files.file
        console.log(file)
        
        let path=__dirname+'/files/'+Date.now()+`.${file.name.split('.')[1]}`

        file.mv(path,(err)=>{
            console.log(err)
        })

        res.json({
            success:true,
            message:'Local file uploaded successfully'
        })
        
    }
    catch(err){
        console.log(err)

    }
}

//Image upload
exports.imageUpload=async (req,res)=>{
    try{
        //data fetch
        const {name,tags,email}=req.body
        console.log(name,tags,email)

        const file=req.files.imageFile
        console.log(file)

        //validation
        const supportedTypes=['jpg','jpeg','png']
        const fileType=file.name.split('.')[1]

        //if file format not supported
        if(!supportedTypes.includes(fileType)){
            return res.status(400).json({
                 success:false,
                 message:'File format not supported'
            })
        }
        
        //if file format supported
        const response=await uploadFileToCloudinary(file,'Codehelp/')
        console.log(response)

        //save entry in DB
        const fileData=await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'Image uploaded successfully on cloudinary'
        })



    }
    catch(err){
        console.error(err)
        res.status(400).json({
            success:false,
            message:'Something went wrong'
        })
    }
}