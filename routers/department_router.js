const router = require('express').Router();
const DepartmentController = require('../controller/department_controller');
router.post('/departmentdetails',DepartmentController.createDepartmentdetails);
router.post('/getdepartmentdetails',DepartmentController.getDepartmentDetails);
router.post('/updatedepartmentdetails', DepartmentController.updateDepartmentDetails);
router.post('/restoredepartmentdetails', DepartmentController.restoreDepartmentDetails);
router.post('/deletedepartment',DepartmentController.deleteDepartmentDetails);
//router.post('/getProductionDetails',ProductionController.getProductionDetails);
module.exports = router;