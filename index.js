const app = require('./app');
const mongodb = require('./config/mongodb');
const usermodel = require('./model/user_model');
const employeedetailsmodel = require('./model/employee_model');
const Departmentdetailsmodel = require('./model/department_model');
const Taskdetailsmodel = require('./model/task_model');
const Projectmodel = require('./model/project_model');
const port = 3000;
app.listen(port,()=>
{
    console.log('Server listening at port: http://localhost:'+port);
}
);
app.get('/', (req,res)=>
{
    res.send("God has blessed me, Sitarudi kuwa vile");
})