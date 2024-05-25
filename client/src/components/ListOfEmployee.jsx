import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container , Alert} from "react-bootstrap";

const ListOfEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");

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

  return (
    <Container>
        {error && <Alert variant="danger">{error}</Alert>}
        {!error && employees.length > 0 && (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.employee_fName}</td>
              <td>{employee.employee_lName}</td>
              <td>{employee.employee_email}</td>
              <td>{employee.employee_designation}</td>
            </tr>
          ))}
        </tbody>
      </Table>  
         )}
    </Container>
  );
};

export default ListOfEmployee;
