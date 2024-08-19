const router = require('express').Router();
const EmployeeController = require('../controller/employee_controller');
router.post('/employeedetails',EmployeeController.createEmployeedetails);
router.post('/getemployeedetails',EmployeeController.getEmployeeDetails);
router.post('/deleteemployeedetails',EmployeeController.deleteEmployeeDetails);
//router.post('/getProductionDetails',ProductionController.getProductionDetails);
module.exports = router;