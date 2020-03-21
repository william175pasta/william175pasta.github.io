import React from "react";
import HouseIcon from "@material-ui/icons/House";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { InputGroup, FormControl } from "react-bootstrap";

import {
  Row,
  Col,
  Container,
  Carousel,
  Navbar,
  Nav,
  NavDropdown,
  Button
} from "react-bootstrap";

const style = {
  container: {
    padding: "10px",
    color: "white",
    textDecoration: "none"
  },
  backBox: {
    position: "fixed",
    top: "9px",
    left: "9px",
    width: "50px"
  },
  alink: {
    color: "red",
    fontWeight: "700",
    fontSize: "20px",
    margin: "0 20px"
  }
};

const HomePage = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ marginBottom: "0px" }}
      >
        <div className={style.backBox}>
          <a
            className={style.alink}
            href="https://william175pasta.github.io/index.html"
          >
            ←
          </a>
        </div>
        <Navbar.Brand
          href="#home"
          style={{ fontSize: "20px", fontWeight: "700", paddingLeft: "10px" }}
        >
          William Travel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features" style={{ fontSize: "16px" }}>
              Europe
            </Nav.Link>
            <Nav.Link href="#pricing" style={{ fontSize: "16px" }}>
              Australia
            </Nav.Link>
            <NavDropdown
              title="Asia"
              id="collasible-nav-dropdown"
              style={{ fontSize: "16px" }}
            >
              <NavDropdown.Item href="#action/3.1">Japan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Korea</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Taiwan</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" style={{ fontSize: "16px" }}>
              More
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" style={{ fontSize: "16px" }}>
              FQA
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Carousel indicators={false} fade={true} controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/1200/300?random=22"
            alt="First slide"
          />
          <Carousel.Caption>
            <div start={{ backgroundColor: "#009688" }}>
              <h1 style={{ textAlign: "end" }}>Relax during the holidays</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <a href="#.." style={style.container}>
                css-Example
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/1200/300?random=2"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Have a good dream on vacation</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#.." style={style.container}>
              css-Example
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/1200/300?random=222"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 style={{ textAlign: "start" }}>Enjoy your vacation</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <a href="#.." style={style.container}>
              css-Example
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div style={{ backgroundColor: "#009688" }}>
        <div className="form-group" style={{ padding: "40px" }}>
          <Container>
            <Row>
              <Col xs={12} md={12}>
                <label htmlFor="exampleInputEmail1">Search Destinations</label>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button variant="secondary">Button</Button>
                  </InputGroup.Append>
                </InputGroup>
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "50px 10px",
          backgroundColor: "#FDF5E6"
        }}
      >
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <div
                className="card "
                style={{ margin: "10px auto", padding: "10px" }}
              >
                <div>
                  <LocationOnIcon style={{ fontSize: 80, color: "#009688" }} />
                </div>

                <h5 className="card-title" style={{ color: "#000" }}>
                  Pick Where
                </h5>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's conten
                </p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div
                className="card "
                style={{ margin: "10px auto", padding: "10px" }}
              >
                <div>
                  <AirplanemodeActiveIcon
                    style={{ fontSize: 80, color: "#009688" }}
                  />
                </div>

                <h5 className="card-title" style={{ color: "#000" }}>
                  Travel Shop
                </h5>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's conten
                </p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div
                className="card "
                style={{ margin: "10px auto", padding: "10px" }}
              >
                <div>
                  <HouseIcon style={{ fontSize: 80, color: "#009688" }} />
                </div>

                <h5 className="card-title" style={{ color: "#000" }}>
                  Fly Cheap
                </h5>

                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's conten
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
