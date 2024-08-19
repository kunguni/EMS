const TaskManagementServices = require('../services/task_service');
exports.createTaskdetails = async (req,res,next)=>
{
    try {
        const {userId,taskId,projectId,description,dueDate,assignedEmployees}=req.body;
       let  taskdetails = await TaskManagementServices.createTaskdetails(userId,taskId,projectId,description,dueDate,assignedEmployees);
       res.json({status:true,success:"Task Details Saved Successfully"});
      } catch (error) {
        next(error);
      }
}

exports.getTaskDetails = async (req,res,next)=>{
    try{
    const {userId} = req.body;
    let firsttermtaskdetails = await TaskManagementServices.getTaskDetails(userId);
    res.json({status:true,success:firsttermtaskdetails});
    }
    catch(error)
    {
        throw error;
    }
}

exports.deleteTaskDetails = async(req,res,next)=>{
    try{
     const{id} = req.body;
     let deleted = await TaskManagementServices.deleteTaskDetails(id);
     res.json({status:true,success:deleted});
    }catch(error){
        next(error);
    }
}