const mongoose = require('mongoose');
const db = require('../config/mongodb');
const UserModel = require('./user_model');
const {Schema} = mongoose;
const departmentSchema = new mongoose.Schema(
    {
        userId:{
    type:Schema.Types.ObjectId,
    ref:UserModel.modelName,
     },
     departmentId:{
        type:String
     },
     departmentName:{type:String},
     managerId:{type:String},
    // Add other fields as needed
  });
  const DepartmentDetailsModel = mongoose.model('Department Details Details', departmentSchema);

  module.exports = DepartmentDetailsModel;
  
