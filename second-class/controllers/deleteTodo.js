//Import the model
const Todo=require('../models/Todo')

exports.deleteTodo=async (req,res)=>{
    try{
        //extract Id
        const id=req.params.id
        //Delete by Id
        await Todo.findByIdAndDelete({_id:id})
        //send a json response with a success flag
        res.status(200).json({
            success:true,
            message:'Deleted successfully'
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