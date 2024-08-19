const ProjectServices = require('../services/project_service');
exports.createProjectdetails = async (req,res,next)=>
{
    try {
        const {userId,projectId,projectName,description,startDate,endDate,assignedEmployees}=req.body;
       let  projectdetails = await ProjectServices.createProjectdetails(userId,projectId,projectName,description,startDate,endDate,assignedEmployees);
       res.json({status:true,success:"Project Details Saved Successfully"});
      } catch (error) {
        next(error);
      }
}

exports.getProjectDetails = async (req,res,next)=>{
    try{
    const {userId} = req.body;
    let projectdetails = await ProjectServices.getProjectDetails(userId);
    res.json({status:true,success:projectdetails});
    }catch(error)
    {
        throw error;
    }
}
                                                                                                                                                                                                                                                                                        
exports.deleteProjectDetails = async(req,res,next)=>{
    try{
     const{id} = req.body;
     let deleted = await ProjectServices.deleteProjectDetails(id);
     res.json({status:true,success:deleted});
    }catch(error){
        next(error);
    }
}

exports.updateProjectDetails = async (req, res, next) => {
    try {
        const { id,userId,projectId,projectName,description,startDate,endDate,assignedEmployees} = req.body;
        let updated = await ProjectServices.updateProjectDetails(id, {userId,projectId,projectName,description,startDate,endDate,assignedEmployees});
        res.json({ status: true, success: updated });
    } catch (error) {
        next(error);
    }
}                                                           