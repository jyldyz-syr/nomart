import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import { FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import { productsContext } from "../../contexts/ProductsContext";

const Header = (props) => {
  const {
    productsCountInCart,
    search,
    searchProducts,
    productsCountInSelect,
  } = useContext(productsContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const history = useHistory();

  function handleSearch(e) {
    let inp_val = e.target.value;
    const search = new URLSearchParams(window.location.search);
    console.log(search);
    console.log(window.location);
    search.set("q", inp_val);

    console.log(search.toString());
    history.replace("?" + search);
    searchProducts();
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "5vh",
      }}
    >
      <Navbar style={{ backgroundColor: "transparent" }} light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="mr-auto"
            navbar
            style={{ marginTop: "23px", fontSize: "20px" }}
          >
            <NavItem>
              <NavLink style={{ color: "#000000" }} href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "#000000" }} href="/fashion">
                Shop
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink style={{ color: "#000000" }} href="/admin">
                Admin
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink style={{ color: "#000000" }} href="/Cart">
                Cart
              </NavLink>
            </NavItem>

            <Label for="exampleSearch"></Label>
            <Input
              onChange={handleSearch}
              className="exampleSearch"
              style={{
                backgroundColor: "transparent",
                marginLeft: "15px",
                border: "none",
                borderBottom: "1px solid black",
                borderRadius: "0",
              }}
              type="search"
              name="search"
              id="exampleSearch"
            />

            <NavItem>
              <NavLink
                style={{
                  fontSize: "17px",
                  color: "Black",
                  marginLeft: "300px",
                  display: "flex",
                }}
                href="/cart"
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  color={productsCountInCart !== 0 ? "red" : "black"}
                  style={{ marginRight: "5px" }}
                />
                <>
                  {" "}
                  {productsCountInCart !== 0 ? "+" + productsCountInCart : ""}
                </>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                style={{ fontSize: "17px", color: "Black" }}
                href="/signup"
              >
                <FontAwesomeIcon icon={faUserPlus} className="faUserPlus" />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                style={{ fontSize: "17px", color: "Black", display: "flex" }}
                href="/select"
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ fontSize: "40px", paddingLeft: "15px" }}
                  style={{ marginRight: "5px" }}
                  color={productsCountInSelect !== 0 ? "red" : "black"}
                />
                <>
                  {" "}
                  {productsCountInSelect !== 0
                    ? "+" + productsCountInSelect
                    : ""}
                </>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
