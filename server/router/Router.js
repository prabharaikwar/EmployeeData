const express = require("express");
const route = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");

route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: true }));

const Controller = require('../controller/Controller');
const { registerUser, authUser } = require('../controller/authController');

const { protect } = require('../middleware/authMiddleware');
route.use(cors());

const {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
} = require('../controller/Controller');
//creating routes

//protected routes
route.get('/employees', protect, getEmployees);
route.post('/employees', protect, createEmployee);
route.get('/employees/:id', protect, getEmployee);
route.put('/employees/:id', protect, updateEmployee);
route.delete('/employees/:id', protect, deleteEmployee);

//public routes
route.post('/register', registerUser);
route.post('/login', authUser);

module.exports = route;

