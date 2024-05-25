import React from "react";
import { Container, Card, ListGroup, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListOfEmployee from "../components/ListOfEmployee";

const Home = ({ isAuthenticated }) => {
  return (
    <Container>
      <Card className="my-4">
        <Card.Body>
          {isAuthenticated ? (
            <>
              <Row className="text-center">
                <Card.Title>
                  Welcome to the Employee Management System
                </Card.Title>
                <Card.Text>
                  Manage your employees efficiently and effectively.
                </Card.Text>
              </Row>
              <Row className="mt-3">
                <Col md={6}>
                  <ListGroup>
                    <ListGroup.Item>                      
                      <ListOfEmployee />
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={6}>
                  <Image
                    src="https://static.startuptalky.com/2022/02/employee-retention.jpg"
                    alt="employees"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </>
          ) : (
            <>
              <Card.Title>
                Welcome to Our Employee Management System!
              </Card.Title>
              <Card.Text>
                You can now view, add, update employee data here please sign in
                to manage your employees.
              </Card.Text>
              <Card.Text>
                don't have an account? <Link to="/signup">register</Link> now
              </Card.Text>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
