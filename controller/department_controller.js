const DepartmentServices = require('../services/department_services');
const DepartmentModel = require('../model/department_model');
exports.createDepartmentdetails = async (req,res,next)=>
{
    try {
        const {userId,departmentId,departmentName,managerId}=req.body;
       let  departmentdetails = await DepartmentServices.createDepartmentdetails(userId,departmentId,departmentName,managerId);
       res.json({status:true,success:"Department Details Saved Successfully"});
      } catch (error) {
        next(error);
      }
}

exports.getDepartmentDetails = async (req,res,next)=>{
    try{
    const {userId} = req.body;
    let departmentdetails = await DepartmentServices.getDepartmentDetails(userId);
    res.json({status:true,success:departmentdetails});
    }catch(error)
    {
        throw error;
    }
}
exports.updateDepartmentDetails = async (req, res, next) => {
    try {
      const {
        userId,departmentId,departmentName,managerId
      } = req.body;
      let updatedDepartmentDetails = await DepartmentServices.updateDepartmentDetails(
        userId,departmentId,departmentName,managerId
      );
  
      res.json({ status: true, success: updatedDepartmentDetails });
    } catch (error) {
      next(error);
    }
  };
exports.deleteDepartmentDetails = async(req,res,next)=>{
    try{
     const{id} = req.body;
     let deleted = await DepartmentServices.deleteDepartmentDetails(id);
     res.json({status:true,success:deleted});
    }catch(error){
        next(error);
    }
}

exports.restoreDepartmentDetails = async(req,res,next)=>{
  const {userId,departmentId,departmentName,managerId} = req.body;

    try {
      // Create a filter to find the deleted department member by user ID and ID number
      const filter = {
        userId: new mongodb.ObjectID(userId),departmentId,departmentName,managerId
      };
      // Find the deleted department member
      const deletedDepartmentMember = await DepartmentModel.collection.findOne(filter);

      if (!deletedDepartmentMember) {
        // If the deleted department member is not found, return an error
        return res.status(404).json({
          status: false,
          message: 'Deleted department member not found.'
        });
      }

      // Remove the '_id' field from the deleted department member (it's an ObjectID)
      delete deletedDepartmentMember._id;

      // Add the 'userId' as a regular string (not an ObjectID)
      deletedDepartmentMember.userId = userId;

      // Update the department member with the original ID number
      const update = {
        $set: deletedDepartmentMember
      };

      // Restore the deleted department member
      const result = await DepartmentModel.collection.updateOne(filter, update, { upsert: false });

      if (result.modifiedCount > 0) {
        // If the department member is successfully restored, return a success message
        return res.status(200).json({
          status: true,
          message: 'Department member restored successfully.'
        });
      } else {
        // If the department member is not found, return an error
        return res.status(404).json({
          status: false,
          message: 'Department member not found.'
        });
      }
    } catch (error) {
      console.error(error);

      // If there's an error, return an error message
      return res.status(500).json({
        status: false,
        message: 'An error occurred while restoring the department member.'
      });
    }
  }