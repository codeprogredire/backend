//Import the model
const Todo=require('../models/Todo')

exports.updateTodo=async (req,res)=>{
    try{
        //extract Id, title and description
        const id=req.params.id
        const {title,description}=req.body
        //Update by Id
        const response=await Todo.findByIdAndUpdate({_id:id},{
            title:title,
            description:description
        })
        //send a json response with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:'Updated successfully'
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