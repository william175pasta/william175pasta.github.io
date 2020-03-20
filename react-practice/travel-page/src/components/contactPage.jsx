import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Card, ListGroup, Form, Button } from "react-bootstrap";
import MailIcon from "@material-ui/icons/Mail";
const ContactPage = () => {
  return (
    <div>
      <h3>ContactPage</h3>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Card style={{ margin: "10px auto" }}>
              <Card.Body style={{ backgroundColor: "#009688", color: "#fff" }}>
                <MailIcon style={{ fontSize: 50 }} />
                <h3>Contact Us For Booking</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Culpa enim commodi, laborum aspernatur, cumque error esse
                  deserunt ipsam corrupti sint.
                </p>
              </Card.Body>
            </Card>
            <Card style={{ margin: "10px auto" }}>
              <Card.Header>
                <h2>Location</h2>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo 333odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac 666facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum 999atk kbox</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card style={{ margin: "10px auto" }}>
              <Card.Body style={{ backgroundColor: "#eee", color: "#aaa" }}>
                <Form>
                  <h4 style={{ color: "#000" }}>Please fill out this form</h4>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="email" placeholder="Phone" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="email" placeholder="Message" />
                  </Form.Group>

                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <Card style={{ margin: "10px auto" }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
