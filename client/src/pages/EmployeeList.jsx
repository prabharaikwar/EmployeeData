import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Alert, Button, Table } from "react-bootstrap";
import ViewEmployee from "../components/ViewEmployee";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleClose = () => setShow(false);

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      setError("No authentication token found");
      return;
    }

    const fetchAllEmployee = () => {
      axios
        .get("http://localhost:4000/employees", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (Array.isArray(response.data)) {
            setEmployees(response.data);
          } else {
            setError("Unexpected response format");
          }
        })
        .catch((error) => {
          console.error("Error fetching employee data:", error);
          setError("Failed to fetch employee data. Please try again.");
        });
    };
    fetchAllEmployee();
  }, [token]);

  const handleShow = (id) => {
    axios
      .get(`http://localhost:4000/employees/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSelectedEmployee(response.data);
        setShow(true);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
        setError("Failed to fetch employee data. Please try again.");
      });
  };

  const handleEdit = (updatedEmployee) => {
    axios
      .put(
        `http://localhost:4000/employees/${updatedEmployee._id}`,
        updatedEmployee,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setEmployees((prevEmployees) =>
          prevEmployees.map((emp) =>
            emp._id === updatedEmployee._id ? response.data : emp
          )
        );
        setShow(false);
      })
      .catch((error) => {
        console.error("Error updating employee data:", error);
        setError("Failed to update employee data. Please try again.");
      });
  };

  const removeEmployee = (id) => {
    axios
      .delete(`http://localhost:4000/employees/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee._id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
        setError("Failed to delete employee. Please try again.");
      });
  };

  return (
    <Container>
      <h2 className="my-4">Employee List</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone No</th>
            <th>Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(employees) &&
            employees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee.employee_fName}</td>
                <td>{employee.employee_lName}</td>
                <td>{employee.employee_phone}</td>
                <td>{employee.employee_email}</td>
                <td>
                  <Button
                    onClick={() => handleShow(employee._id)}
                    className="me-2"
                  >
                    View
                  </Button>
                  <Button
                    onClick={() => removeEmployee(employee._id)}
                    variant="danger"
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {selectedEmployee && (
        <ViewEmployee
          show={show}
          handleClose={handleClose}
          employee={selectedEmployee}
          handleEdit={handleEdit}
        />
      )}
    </Container>
  );
};

export default EmployeeList;
