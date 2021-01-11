import React, { useContext, useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container } from "reactstrap";
import Avatar from "@material-ui/core/Avatar";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";

import { productsContext } from "../../contexts/ProductsContext";
import { Link } from "react-router-dom";
import Header from "../GlobalHeader/HeaderHome";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Select() {
  const classes = useStyles();

  const {
    selectData,
    getSelect,
    deleteContact,
    makeOrder,
    addAndDeleteProductInCart,
    checkProductInCart,
    deleteProductInSelect,
  } = useContext(productsContext);

  useEffect(() => {
    getSelect();
  }, []);

  return (
    <div>
      <Header />
      <Link to="/">
        <div style={{ textAlign: "center" }}>
          <button type="submit" className="btn btn-primary mt-2">
            Back to Homepage
          </button>
        </div>
      </Link>

      {selectData?.products ? (
        <div>
          <Container className="my-5">
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Products</StyledTableCell>
                    <StyledTableCell align="left">
                      Product Title
                    </StyledTableCell>
                    <StyledTableCell align="right">Price</StyledTableCell>
                    <StyledTableCell align="right">Add to Cart</StyledTableCell>
                    <StyledTableCell align="right">Delete</StyledTableCell>
                  </TableRow>
                </TableHead>
                {selectData.products.map((item) => (
                  <>
                    <TableBody>
                      <StyledTableRow key={item.product.id}>
                        <StyledTableCell align="right">
                          <Avatar alt="Remy Sharp" src={item.product.image} />
                        </StyledTableCell>
                        <StyledTableCell
                          component="th"
                          scope="row"
                          style={{
                            marginLeft: "0",
                          }}
                        >
                          {item.product.title}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {item.product.price}
                        </StyledTableCell>

                        <StyledTableCell align="right">
                          <Button
                            size="small"
                            onClick={() =>
                              addAndDeleteProductInCart(item.product)
                            }
                            color={
                              checkProductInCart(item.product.id)
                                ? "primary"
                                : "initial"
                            }
                          >
                            <ShoppingCartIcon />
                          </Button>
                          Buy
                        </StyledTableCell>

                        <StyledTableCell align="right">
                          <button
                            style={{ marginTop: "20px" }}
                            className="btn btn-danger"
                            onClick={() =>
                              deleteProductInSelect(item.product.id)
                            }
                          >
                            Delete
                          </button>
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  </>
                ))}
              </Table>
            </TableContainer>

            <Link
              to="/cart"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <button
                onClick={makeOrder}
                className="btn btn-primary"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                Cart
              </button>
            </Link>
          </Container>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
