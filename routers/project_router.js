const router = require('express').Router();
const ProjectController = require('../controller/project_controller');
router.post('/projectdetails',ProjectController.createProjectdetails);
router.post('/getprojectdetails',ProjectController.getProjectDetails);
router.post('/deleteproject',ProjectController.deleteProjectDetails);
router.put('/updateproject',ProjectController.updateProjectDetails);
//router.post('/getProductionDetails',ProductionController.getProductionDetails);
module.exports = router;