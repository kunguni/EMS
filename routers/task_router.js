const router = require('express').Router();
const TaskManagementController = require('../controller/task_controller');
router.post('/taskdetails',TaskManagementController.createTaskdetails);
router.post('/gettaskdetails',TaskManagementController.getTaskDetails);
router.post('/deletetaskdetails',TaskManagementController.deleteTaskDetails);
//router.post('/getProductionDetails',ProductionController.getProductionDetails);
module.exports = router;