const Employee = require('../Models/employee');

const employeeController = {};

employeeController.getEmployees = async (req, res) => {
    const Employees = await Employee.find();
    res.json(Employees);    
};

employeeController.createEmployee = async (req , res) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.json({
        'status':'Employee saved'
    });
};

employeeController.getEmployee = async(req, res)=> {
    const employee= await Employee.findById(req.params.id);
    //Employee.findById();
    res.json(employee);
};

employeeController.editEmployee = async (req,res) => {
    const { id } = req.params;

    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary

    }
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json('employee updated');


}

employeeController.deleteEmployee = function () {

}
module.exports = employeeController;

