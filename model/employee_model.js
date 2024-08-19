const mongoose = require('mongoose');
const db = require('../config/mongodb');
const UserModel = require('./user_model');
const {Schema} = mongoose;
const employeesSchema = new mongoose.Schema(
    {
        userId:{
    type:Schema.Types.ObjectId,
    ref:UserModel.modelName,
     },
     name:{
        type:String
     },
     employeeId:{type:String},
     departmentId:{type:String},
    jobTitle:{type:String},
   email:{type:String},
     phoneNumber:{type:String},
    // Add other fields as needed
  });
  const employeeDetailsModel = mongoose.model('Employee Details', employeesSchema);

  module.exports = employeeDetailsModel;
 