import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Container, NavItem, NavLink } from "reactstrap";

const styles = {
  font: {
    marginLeft: "20px",
    marginTop: "50px",
    marginBottom: "50px",
    display: "flex",
    justifyContent: "center",
  },

  footer: {
    marginTop: "20px",
  },

  footer2: {
    flexDirection: "column",
    height: "70px",
  },

  instagram: {
    marginLeft: "60px",
  },

  copy: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "90px",
    width: "1500",
    borderTop: "1px solid  rgb(218, 207, 207)",
    paddingTop: "20px",
  },
  copy1: {
    display: "flex",
    flexDirection: "row",
  },
};

const Footer = () => {
  return (
    <Container className="containerInst">
      <MDBFooter style={styles.font} className="font pt-4 mt-4">
        <MDBContainer fluid className="text-md-center">
          <MDBRow>
            <MDBCol md="4" sm="12">
              <ul>
                <h5 className="title">About us</h5>
                <li style={styles.footer} className="list-unstyled">
                  <NavLink disabled href="#!">
                    About us
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    FAQ
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    Help
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    Snipping & Return
                  </NavLink>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="4" sm="12">
              <ul>
                <h5 className="title">Product Categories</h5>
                <li style={styles.footer} className="list-unstyled">
                  <NavLink disabled href="#!">
                    Bed
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    Sofa
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    Office Furniture
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    Chair
                  </NavLink>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="4" sm="12">
              <ul>
                <h5 className="title">Connect</h5>
                <li style={styles.footer} className="list-unstyled">
                  <NavLink disabled href="#!">
                    2020 stockes is alp
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    1011 USA
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    info@yourdomain.com
                  </NavLink>
                </li>
                <li className="list-unstyled">
                  <NavLink disabled href="#!">
                    (+65) 109372394
                  </NavLink>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </Container>
  );
};

export default Footer;
