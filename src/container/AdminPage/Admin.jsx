import React, { useState, useEffect, useContext } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { productsContext } from "../../contexts/ProductsContext";
import Pagination from "@material-ui/lab/Pagination";
import { Link, useHistory } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Header from "../GlobalHeader/HeaderHome";
import { Container } from "reactstrap";

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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Admin() {
  const classes = useStyles();

  const history = useHistory();
  const search = new URLSearchParams(history.location.search);

  const {
    products,
    getProducts,
    deleteContact,
    editProduct,
    pageTask,
    page,

    getProductsAdmin,
    totalCount,
  } = useContext(productsContext);

  useEffect(() => {
    getProductsAdmin();
    getProducts();
  }, [getProductsAdmin, getProducts]);

  return (
    <div>
      <Header />
      <Link to="/addproduct">
        <div style={{ textAlign: "center" }}>
          <button type="submit" className="btn btn-primary mt-2">
            Add New Product
          </button>
        </div>
      </Link>
      <Container className="my-5">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Item ID</StyledTableCell>
                <StyledTableCell>Item Name</StyledTableCell>
                <StyledTableCell align="right">Image</StyledTableCell>
                <StyledTableCell align="right">Description</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell align="right">Delete</StyledTableCell>
                <StyledTableCell align="right">Edit</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((item) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {item.id}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {item.title}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Avatar alt="Remy Sharp" src={item.image} />
                  </StyledTableCell>
                  <StyledTableCell align="left" scope="row">
                    {item.description}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.price}</StyledTableCell>
                  <StyledTableCell align="right">
                    <button
                      style={{ marginTop: "20px" }}
                      className="btn btn-danger"
                      onClick={() => deleteContact(item.id)}
                    >
                      Delete
                    </button>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Link to="/edit">
                      <button
                        style={{ marginTop: "20px" }}
                        className="btn btn-warning"
                        onClick={() => editProduct(item.id)}
                      >
                        Edit
                      </button>
                    </Link>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <Container>
        <div>
          <Pagination
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            onChange={(e, newpage) => pageTask(newpage)}
            page={parseInt(search.get("_page")) || 1}
            count={Math.ceil(totalCount / 6)}
            defaultPage={1}
          />
        </div>
      </Container>
    </div>
  );
}
