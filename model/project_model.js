const mongoose = require('mongoose');
const db = require('../config/mongodb');
const UserModel = require('./user_model');
const {Schema} = mongoose;
const projectSchema = new mongoose.Schema(
    {
        userId:{
    type:Schema.Types.ObjectId,
    ref:UserModel.modelName,
     },
        projectId:{type:String},
        projectName:{type:String},
        description:{type:String},

     startDate:{type:Date},
     endDate:{type:Date},                                                                                                                                            
     schoolName:{type:String},
     assignedEmployees:{type:[String]} ,
    //Add other fields as needed
  });  
  const ProjectModel = mongoose.model('Project Data', projectSchema);

  module.exports = ProjectModel;
                                        