import React from "react";

import { Row, Col, Container } from "react-bootstrap";

const array1 = [
    "https://picsum.photos/1600/900?random=1",
    "https://picsum.photos/1600/900?random=2",
    "https://picsum.photos/1600/900?random=3",
    "https://picsum.photos/1600/900?random=4"
];
const array2 = [
    "https://picsum.photos/1600/900?random=5",
    "https://picsum.photos/1600/900?random=6",
    "https://picsum.photos/1600/900?random=7",
    "https://picsum.photos/1600/900?random=8"
];

const array3 = [
    "https://picsum.photos/1600/900?random=9",
    "https://picsum.photos/1600/900?random=10",
    "https://picsum.photos/1600/900?random=11",
    "https://picsum.photos/1600/900?random=12"
];

const fakeImg1 = array1.map((item, index) => {
    return (
        <Col xs={12} md={3} key={index}>
            <img src={item} className="d-block w-100" alt="..." />
        </Col>
    );
});

const fakeImg2 = array2.map((item, index) => {
    return (
        <Col xs={12} md={3} key={index}>
            <img src={item} className="d-block w-100" alt="..." />
        </Col>
    );
});

const fakeImg3 = array3.map((item, index) => {
    return (
        <Col xs={12} md={3} key={index}>
            <img src={item} className="d-block w-100" alt="..." />
        </Col>
    );
});
const GalleryPage = () => {
    return (
        <div>
            <h3>
                <span style={{ color: "#009688" }}>Photo</span>Gallery
            </h3>

            <div>
                <Container>
                    <Row style={{ margin: "10px 0" }}>{fakeImg1}</Row>
                </Container>
                <Container>
                    <Row style={{ margin: "10px 0" }}>{fakeImg2}</Row>
                </Container>
                <Container>
                    <Row style={{ margin: "10px 0" }}>{fakeImg3}</Row>
                </Container>
            </div>
        </div>
    );
};

export default GalleryPage;
