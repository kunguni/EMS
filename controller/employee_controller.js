const employeeServices = require('../services/employee_services');
exports.createEmployeedetails = async (req,res,next)=>
{
    try {
        const {userId,name,employeeId,departmentId,jobTitle,email,phoneNumber}=req.body;
       let employeedetails = await employeeServices.createEmployeedetails(userId,name,employeeId,departmentId,jobTitle,email,phoneNumber);
       res.json({status:true,success:"Employee Details Saved Successfully"});
      } catch (error) {
        next(error);
      }
}

exports.getEmployeeDetails = async (req,res,next)=>{
    try{
    const {userId} = req.body;
    let employeedetails = await employeeServices.getEmployeeDetails(userId);
    res.json({status:true,success:employeedetails});
    }catch(error)
    {
        throw error;
    }
}

exports.deleteEmployeeDetails = async(req,res,next)=>{
    try{
     const{id} = req.body;
     let deleted = await employeeServices.deleteEmployeeDetails(id);
     res.json({status:true,success:deleted});
    }catch(error){
        next(error);
    }
}