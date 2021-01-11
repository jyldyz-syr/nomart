import React, { useState, useEffect, useContext } from "react";
import { productsContext } from "../../contexts/ProductsContext";
import "./ProductCards.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

import { Row, Col, Container } from "reactstrap";
import Header from "../GlobalHeader/HeaderHome";
import Products from "../Home/Products";
import Typography from "@material-ui/core/Typography";
import Advantages from "../Home/Advantages";

const ProductCard = (props) => {
  const {
    products,
    addAndDeleteProductInCart,
    getProductID,
    productDetails,
    addAndDeleteProductInSelect,
    checkProductInSelect,
  } = useContext(productsContext);

  useEffect(() => {
    getProductID(props.match.params.id);
  }, []);

  console.log(products);

  return (
    <div>
      <Header />
      <div className="mainProductCard">
        {productDetails != null ? (
          <>
            <Container
            //  style={{
            //   display:"flex",
            //   flexDirection:"row",
            //   justifyContent:"center",
            //   margin:"5%"

            // }}
            >
              <Row>
                <Col lg="5" md="12" xs="12" style={{ marginleft: "30px" }}>
                  <img
                    className="img4"
                    src={productDetails.image}
                    style={{
                      margin: "20px",
                      borderRadius: "5px",
                    }}
                  ></img>
                </Col>

                <Col
                  lg="7"
                  md="12"
                  xs="12"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="mainPc2"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      className="text"
                      component="div"
                      variant="h3"
                      style={{
                        fontFamily: "Cormorant Garamond",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "5px",
                        height: "17vh",
                        width: "100%",
                      }}
                    >
                      {productDetails.title}
                    </Typography>

                    <p
                      style={{
                        width: "70%",
                        marginBottom: "10%",
                      }}
                    >
                      {productDetails.description}
                    </p>

                    <h4>{productDetails.price} $ </h4>

                    <div
                      className="innerBlock4"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Link>
                        <button
                          type="submit"
                          className="btn btn-primary mt-2 ml-2"
                          onClick={() =>
                            addAndDeleteProductInCart(productDetails)
                          }
                        >
                          Add to Cart
                        </button>
                      </Link>

                      <Link to="/cart">
                        <button
                          type="submit"
                          className="btn btn-primary mt-2 ml-2"
                        >
                          Go to Cart
                        </button>
                      </Link>

                      <FontAwesomeIcon
                        icon={faHeart}
                        style={{ fontSize: "40px", paddingLeft: "15px" }}
                        onClick={() =>
                          addAndDeleteProductInSelect(productDetails)
                        }
                        color={
                          checkProductInSelect(productDetails.id)
                            ? "red"
                            : "black"
                        }
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </>
        ) : (
          ""
        )}
      </div>
      <div>
        <Advantages />
        <Typography
          className="text"
          component="div"
          variant="h3"
          style={{
            fontFamily: "Cormorant Garamond",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "5px",
            height: "10vh",
            width: "100%",
          }}
        >
          Similar Products
        </Typography>
        <Products />
      </div>
    </div>
  );
};

export default ProductCard;
