const ProjectModel = require('../model/project_model');
class ProjectServices{
    static async createProjectdetails(userId,projectId,projectName,description,startDate,endDate,assignedEmployees)
    {                                                                                                                                                                    
        const createProjectdetails = new ProjectModel({userId,projectId,projectName,description,startDate,endDate,assignedEmployees});
        return await createProjectdetails.save();
    }
    static async getProjectDetails(userId)
    {
        const projectData = await ProjectModel.find({userId});
        return projectData;
    }
static async deleteProjectDetails(id)
{
    const deleted = await ProjectModel.findOneAndDelete({_id:id})
    return deleted;
}
static async updateProjectDetails(id, data)
 {
    return await ProjectModel.findByIdAndUpdate(id, data, { new: true });
}
}



    module.exports = ProjectServices;