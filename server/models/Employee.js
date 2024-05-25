const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  employee_fName: { type: String, required: true },
  employee_mName: { type: String },
  employee_lName: { type: String, required: true },
  employee_phone: { type: String, required: true },
  employee_email: { type: String, required: true, unique: true },
  employee_designation: { type: String, required: true },
  employee_department: { type: String, required: true },
  employee_salary: { type: Number, required: true },
  employee_gender: { type: String, required: true },
  employee_currentAddress: { type: String, required: true },
  employee_permanentAddress: { type: String, required: true },
  employee_city: { type: String, required: true },
  employee_state: { type: String, required: true },
  employee_zipCode: { type: String, required: true },
  employee_vaccineStatus: { type: String },
  employee_servicePeriod: { type: String },
  message: { type: String }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
