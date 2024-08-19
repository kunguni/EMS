const employeeDetailsModel = require('../model/employee_model');
class employeeServices{
    static async createEmployeedetails(userId,name,employeeId,departmentId,jobTitle,email,phoneNumber)
    {
        const createEmployeedetails = new employeeDetailsModel({userId,name,employeeId,departmentId,jobTitle,email,phoneNumber});
        return await createEmployeedetails.save();
    }
    static async getEmployeeDetails(userId)
    {
        const employeeData = await employeeDetailsModel.find({userId});
        return employeeData;
    }
static async deleteEmployeeDetails(id)
{
    const deleted = await employeeDetailsModel.findOneAndDelete({_id:id})
    return deleted;
}
}

    module.exports = employeeServices;