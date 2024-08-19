const TaskManagementModel = require('../model/task_model');
class TaskManagementServices{
    static async createTaskdetails(userId,taskId,projectId,description,dueDate,assignedEmployees)
    {
        const createTaskdetails = new TaskManagementModel({userId,taskId,projectId,description,dueDate,assignedEmployees});
        return await createTaskdetails.save();
    }
    static async getTaskDetails(userId)
    {
        const performedShowData = await  TaskManagementModel.find({userId});
        return performedShowData;
    }
static async deleteTaskDetails(id)
{
    const deleted = await TaskManagementModel.findOneAndDelete({_id:id})
    return deleted;
}
}

    module.exports = TaskManagementServices;