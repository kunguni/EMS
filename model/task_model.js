const mongoose = require('mongoose');
const db = require('../config/mongodb');
const UserModel = require('./user_model');
const {Schema} = mongoose;
const taskSchema = new mongoose.Schema(
    {
        userId:{
    type:Schema.Types.ObjectId,
    ref:UserModel.modelName,
     },
     taskId:{
        type:String
     },
     projectId:{type:String},
     description:{type:String},
   dueDate:{type:Date},
     assignedEmployees:{type:[String]} ,    // Add other fields as needed
  });
  const TaskManagementModel = mongoose.model('Task Managent', taskSchema);
  module.exports = TaskManagementModel;
  