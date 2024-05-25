import React, { useState } from "react";
import axios from "axios";
import { Container, Alert } from "react-bootstrap";
import EmployeeForm from "../components/EmployeeForm";

const AddEmployee = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const handleAddEmployee = (employeeData) => {
    const token = localStorage.getItem("authToken");
    axios
      .post("http://localhost:4000/employees", employeeData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Employee added:", response.data);
        setSuccessMessage("Employee added successfully!");
      })
      .catch((error) => console.error("Error adding employee:", error));
  };

  return (
    <Container>
      <h2>Add Employee</h2>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <EmployeeForm onSubmit={handleAddEmployee} />
    </Container>
  );
};

export default AddEmployee;
