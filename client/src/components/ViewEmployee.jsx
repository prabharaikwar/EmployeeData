import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const ViewEmployee = ({ handleClose, show, employee, handleEdit }) => {
  const [formData, setFormData] = useState({
    employee_fName: "",
    employee_lName: "",
    employee_phone: "",
    employee_email: "",
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        employee_fName: employee.employee_fName,
        employee_lName: employee.employee_lName,
        employee_phone: employee.employee_phone,
        employee_email: employee.employee_email,
      });
    }
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const updatedEmployee = { ...employee, ...formData };
    handleEdit(updatedEmployee);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h5>
            {employee.employee_fName}
            {employee.employee_lName}
          </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="employee_fName"
                  value={formData.employee_fName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="employee_lName"
                  value={formData.employee_lName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="employee_phone"
                  value={formData.employee_phone}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="employee_email"
                  value={formData.employee_email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewEmployee;
