import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const EmployeeFooter = () => {
  return (
    <div className="bg-dark text-light py-3 mt-3">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 MVC by @prabharaikwar</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EmployeeFooter;
