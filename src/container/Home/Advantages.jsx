import React from "react";
import { Row, Col, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faAllergies } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faConciergeBell } from "@fortawesome/free-solid-svg-icons";
import Typography from "@material-ui/core/Typography";

const Advantages = () => {
  return (
    <div>
      <Typography
        className="text"
        component="div"
        variant="h3"
        style={{
          fontFamily: "Cormorant Garamond",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
          marginBottom: "25px",
          height: "17vh",
          width: "100%",
        }}
      >
        Ethics of NomArt
      </Typography>
      <Container xs="12" style={{ marginTop: "20px", marginBottom: "40px" }}>
        <Row style={{ textAlign: "center" }}>
          <Col xs="12" md="6" lg="3">
            <FontAwesomeIcon
              icon={faHeart}
              style={{ fontSize: "30px", color: "Red" }}
            />
            <h4 style={{ marginBottom: "30px" }}>Handmade</h4>
            <p>All our products are handmade and made with love</p>
          </Col>
          <Col xs="12" md="6" lg="3">
            <FontAwesomeIcon
              icon={faAllergies}
              style={{ fontSize: "30px", color: "Black" }}
            />
            <h4 style={{ marginBottom: "30px" }}>Free Shipping</h4>

            <p>Free Shipping for any product and it's world wide</p>
          </Col>
          <Col xs="12" md="6" lg="3">
            <FontAwesomeIcon
              icon={faPaw}
              style={{ fontSize: "30px", color: "Green" }}
            />
            <h4 style={{ marginBottom: "30px" }}>Cruelty Free</h4>
            <p>
              All the products are made with no tests on animals and 100%
              eco-friendly!
            </p>
          </Col>
          <Col xs="12" md="6" lg="3">
            <FontAwesomeIcon
              icon={faConciergeBell}
              style={{ fontSize: "30px", color: "Black" }}
            />
            <h4 style={{ marginBottom: "30px" }}>24/7 Support Expert</h4>
            <p>
              Support line is always here for you. Please consider taking a
              survey!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Advantages;
