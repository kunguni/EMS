const express = require ('express');
const body_parser = require('body-parser');
const UserRouter = require('./routers/user_route');
const EmployeeRouter = require('./routers/employee_router');
const DepartmentRouter = require('./routers/department_router');
const TaskRouter = require('./routers/task_router');
const ProjectRouter = require('./routers/project_router');
 
const app = express();
                                                          
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Adjust in production
    res.header(                                 
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  
app.use(body_parser.json());
app.use('/',UserRouter);
app.use('/',EmployeeRouter);
app.use('/',DepartmentRouter);
app.use('/',TaskRouter);
app.use('/',ProjectRouter);


module.exports = app;