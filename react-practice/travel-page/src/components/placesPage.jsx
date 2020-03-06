import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Row, Col, Container } from "react-bootstrap";

const PlacesPage = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <div className="card " style={{ margin: "10px" }}>
                            <img
                                src="https://picsum.photos/250/150?random=115"
                                className="card-img"
                                alt="..."
                            />
                            <div className="card-img-overlay">
                                <h5 className="card-title" style={{ color: "#fff" }}>
                                    Japan Card
                </h5>
                            </div>
                            <div style={{ padding: "10px" }}>
                                <p>
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's conten
                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="card " style={{ margin: "10px" }}>
                            <img
                                src="https://picsum.photos/250/150?random=65"
                                className="card-img"
                                alt="..."
                            />
                            <div className="card-img-overlay">
                                <h5 className="card-title" style={{ color: "#fff" }}>
                                    Maldives Card
                </h5>
                            </div>
                            <div style={{ padding: "10px" }}>
                                <p>
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's conten
                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="card " style={{ margin: "10px" }}>
                            <img
                                src="https://picsum.photos/250/150?random=5"
                                className="card-img"
                                alt="..."
                            />
                            <div className="card-img-overlay">
                                <h5 className="card-title" style={{ color: "#fff" }}>
                                    Italy Card
                </h5>
                            </div>
                            <div style={{ padding: "10px" }}>
                                <p>
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's conten
                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div style={{ marginBottom: "30px" }}>
                <h3>
                    <span style={{ color: "#009688" }}>Popular</span>Places
        </h3>
                <main style={{ display: "flex", justifyContent: "space-around" }} />
                <div>
                    <button type="button" className="btn btn-secondary btn-lg">
                        <MailIcon /> <span>CONTACT FOR BOOKING</span>
                    </button>
                </div>
            </div>

            <div
                style={{
                    backgroundColor: "#009688",
                    padding: "20px",
                    margin: "30px 0"
                }}
            >
                <h3>Follow Travelville</h3>
                <p>Follow us on social media for special offers</p>
                <FacebookIcon
                    style={{ fontSize: 40, color: "white", margin: "0px 5px" }}
                />
                <TwitterIcon
                    style={{ fontSize: 40, color: "white", margin: "0px 5px" }}
                />
                <LinkedInIcon
                    style={{ fontSize: 40, color: "white", margin: "0px 5px" }}
                />
                <InstagramIcon
                    style={{ fontSize: 40, color: "white", margin: "0px 5px" }}
                />
                <GitHubIcon
                    style={{ fontSize: 40, color: "white", margin: "0px 5px" }}
                />
                {/* <ModalExample style={{ display: "block" }} /> */}
            </div>
        </div>
    );
};

export default PlacesPage;
