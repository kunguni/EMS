const DepartmentDetailsModel = require('../model/department_model');
class DepartmentServices{
    static async createDepartmentdetails(userId,departmentId,departmentName,managerId)
    {
        const createDepartmentdetails = new DepartmentDetailsModel({userId,departmentId,departmentName,managerId});
        return await createDepartmentdetails.save();
    }
    static async getDepartmentDetails(userId)
    {
        const departmentData = await DepartmentDetailsModel.find({userId});
        return departmentData;
    }
    static async updateDepartmentDetails(userId,departmentId,departmentName,managerId) {
        const updatedDepartmentDetails = {
          userId,departmentId,departmentName,managerId
        };
    
        return await DepartmentDetailsModel.findOneAndUpdate(
          { _id: id },
          { $set: updatedDepartmentDetails },
          { new: true }
        );
      }
static async deleteDepartmentDetails(id)
{
    const deleted = await DepartmentDetailsModel.findOneAndDelete({_id:id})
    return deleted;
}
}

    module.exports = DepartmentServices;