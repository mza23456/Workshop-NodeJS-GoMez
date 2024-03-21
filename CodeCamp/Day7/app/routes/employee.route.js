module.exports = (app) => {
    const employee = require('../controllers/employee.controller')

    const router = require('express').Router();

    //Retrive all employee with setting
    router.get("/", employee.findAll)
    //Insert data to employee with setting
    router.post("/create-employee-setting", employee.create);
    //Retrive an employee with setting
    router.get("/edit-employee/:id", employee.findOne);
    //Update an employee with id
    router.get("/update-employee/:id", employee.update);
    //Delele an employee with id
    router.delete("/delele-employee", employee.delete);

    app.use("/employees", router);  
};