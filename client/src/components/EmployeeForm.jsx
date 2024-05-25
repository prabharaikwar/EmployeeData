import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const EmployeeForm = ({ initialData, onSubmit }) => {
  const [employeeData, setEmployeeData] = useState(
    initialData || {
      employee_fName: "",
      employee_mName: "",
      employee_lName: "",
      employee_phone: "",
      employee_email: "",
      employee_designation: "",
      employee_department: "",
      employee_salary: "",
      employee_gender: "",
      employee_currentAddress: "",
      employee_permanentAddress: "",
      employee_city: "",
      employee_state: "",
      employee_zipCode: "",
      employee_vacaineStatus: "",
      employee_servicePeriod: "",
      message: "",
    }
  );

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setEmployeeData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!employeeData.employee_fName)
      newErrors.employee_fName = "First name is required";
    if (!employeeData.employee_lName)
      newErrors.employee_lName = "Last name is required";
    if (!employeeData.employee_phone)
      newErrors.employee_phone = "Phone number is required";
    if (!/^\d{10}$/.test(employeeData.employee_phone))
      newErrors.employee_phone = "Phone number must be 10 digits";
    if (!employeeData.employee_email)
      newErrors.employee_email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(employeeData.employee_email))
      newErrors.employee_email = "Email address is invalid";
    if (!employeeData.employee_designation)
      newErrors.employee_designation = "Designation is required";
    if (!employeeData.employee_department)
      newErrors.employee_department = "Department is required";
    if (!employeeData.employee_salary || isNaN(employeeData.employee_salary))
      newErrors.employee_salary = "Salary must be a number";
    if (!employeeData.employee_gender)
      newErrors.employee_gender = "Gender is required";
    if (!employeeData.employee_currentAddress)
      newErrors.employee_currentAddress = "Current address is required";
    if (!employeeData.employee_permanentAddress)
      newErrors.employee_permanentAddress = "Parmanent address is required";
    if (!employeeData.employee_city)
      newErrors.employee_city = "City is required";
    if (!employeeData.employee_state)
      newErrors.employee_state = "State is required";
    if (!employeeData.employee_zipCode)
      newErrors.employee_zipCode = "Zip code is required";
    if (!/^\d{5}$/.test(employeeData.employee_zipCode))
      newErrors.employee_zipCode = "Zip code must be 5 digits";
    if (!employeeData.employee_vacaineStatus)
      newErrors.employee_vacaineStatus = "Vaccine status is required";
    if (!employeeData.employee_servicePeriod)
      newErrors.employee_servicePeriod = "Service period is required";
    if (!employeeData.message) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      onSubmit(employeeData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="justify-center">
        <Row>
          <Col md={4}>
            <Form.Group controlId="formEmployeeFName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="employee_fName"
                value={employeeData.employee_fName}
                onChange={handleChange}
                isInvalid={!!errors.employee_fName}
              />
              {errors.employee_fName && (
                <div className="error">{errors.employee_fName}</div>
              )}
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formEmployeeMName">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                name="employee_mName"
                value={employeeData.employee_mName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formEmployeeLName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="employee_lName"
                value={employeeData.employee_lName}
                onChange={handleChange}
                isInvalid={!!errors.employee_lName}
              />
              {errors.employee_lName && (
                <div className="error">{errors.employee_lName}</div>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Form.Group controlId="formEmployeePhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="employee_phone"
                value={employeeData.employee_phone}
                onChange={handleChange}
                isInvalid={!!errors.employee_phone}
              />
              {errors.employee_phone && (
                <div className="error">{errors.employee_phone}</div>
              )}
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formEmployeeEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="employee_email"
                value={employeeData.employee_email}
                onChange={handleChange}
                isInvalid={!!errors.employee_email}
              />
              {errors.employee_email && (
                <div className="error">{errors.employee_email}</div>
              )}
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formEmployeeDesignation">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                name="employee_designation"
                value={employeeData.employee_designation}
                onChange={handleChange}
                isInvalid={!!errors.employee_designation}
              />
              {errors.employee_designation && (
                <div className="error">{errors.employee_designation}</div>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group controlId="formEmployeeDepartment">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                name="employee_department"
                value={employeeData.employee_department}
                onChange={handleChange}
                isInvalid={!!errors.employee_department}
              />
              {errors.employee_department && (
                <div className="error">{errors.employee_department}</div>
              )}
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formEmployeeSalary">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="text"
                name="employee_salary"
                value={employeeData.employee_salary}
                onChange={handleChange}
                isInvalid={!!errors.employee_salary}
              />
              {errors.employee_salary && (
                <div className="error">{errors.employee_salary}</div>
              )}
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formEmployeeGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="employee_gender"
                value={employeeData.employee_gender}
                onChange={handleChange}
                isInvalid={!!errors.employee_gender}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Control>
              {errors.employee_gender && (
                <div className="error">{errors.employee_gender}</div>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formEmployeeCurrentAddress">
              <Form.Label>Current Address</Form.Label>
              <Form.Control
                type="text"
                name="employee_currentAddress"
                value={employeeData.employee_currentAddress}
                onChange={handleChange}
                isInvalid={!!errors.employee_currentAddress}
              />
              {errors.employee_currentAddress && (
                <div className="error">{errors.employee_currentAddress}</div>
              )}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmployeePermanentAddress">
              <Form.Label>Permanent Address</Form.Label>
              <Form.Control
                type="text"
                name="employee_permanentAddress"
                value={employeeData.employee_permanentAddress}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Form.Group controlId="formEmployeeCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="employee_city"
                value={employeeData.employee_city}
                onChange={handleChange}
                isInvalid={!!errors.employee_city}
              />
              {errors.employee_city && (
                <div className="error">{errors.employee_city}</div>
              )}
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formEmployeeState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="employee_state"
                value={employeeData.employee_state}
                onChange={handleChange}
                isInvalid={!!errors.employee_state}
              />
              {errors.employee_state && (
                <div className="error">{errors.employee_state}</div>
              )}
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formEmployeeZipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                name="employee_zipCode"
                value={employeeData.employee_zipCode}
                onChange={handleChange}
                isInvalid={!!errors.employee_zipCode}
              />
              {errors.employee_zipCode && (
                <div className="error">{errors.employee_zipCode}</div>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formEmployeeVacaineStatus">
              <Form.Label>Vaccine Status</Form.Label>
              <Form.Control
                type="text"
                name="employee_vacaineStatus"
                value={employeeData.employee_vacaineStatus}
                onChange={handleChange}
                isInvalid={!!errors.employee_vacaineStatus}
              />
              {errors.employee_vacaineStatus && (
                <div className="error">{errors.employee_vacaineStatus}</div>
              )}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmployeeServicePeriod">
              <Form.Label>Service Period</Form.Label>
              <Form.Control
                type="text"
                name="employee_servicePeriod"
                value={employeeData.employee_servicePeriod}
                onChange={handleChange}
                isInvalid={!!errors.employee_servicePeriod}
              />
              {errors.employee_servicePeriod && (
                <div className="error">{errors.employee_servicePeriod}</div>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={employeeData.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
              />
              {errors.message && <div className="error">{errors.message}</div>}
            </Form.Group>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Button variant="primary" type="submit" className="mt-2">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default EmployeeForm;
