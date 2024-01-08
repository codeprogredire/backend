//Import the model
const Todo=require('../models/Todo')

exports.getTodo=async (req,res)=>{
    try{
        //extract title and description from request body
        const {title,description}=req.body
        //Get all todos from DB
        const response=await Todo.find({})
        //send a json response with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:'Data fetched successfully'
        })

    }
    catch(err){
        console.error(err)
        console.log(err)
        res.status(500).json({
            success:false,
            data:'Internal server error',
            message:err.message
        })

    }
}

exports.getTodoById=async (req,res)=>{
    try{
        //extract ID
        const id=req.params.id
        //Get todoById from DB
        const response=await Todo.findById({_id:id})

        if(!response){
            return res.status(400).json({
                success:false,
                message:"No data found with given Id"
            })
        }
        //send a json response with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:'Data fetched successfully'
        })

    }
    catch(err){
        console.error(err)
        console.log(err)
        res.status(500).json({
            success:false,
            data:'Internal server error',
            message:err.message
        })

    }
}