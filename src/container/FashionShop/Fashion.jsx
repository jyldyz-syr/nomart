import React, { useState, useEffect, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import image1 from "./image/fashion.png";
import Header from "../GlobalHeader/HeaderHome";

import { productsContext } from "../../contexts/ProductsContext";
import Pagination from "@material-ui/lab/Pagination";
import { Link, useHistory } from "react-router-dom";

import FindInPageIcon from "@material-ui/icons/FindInPage";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";

import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundImage: { image1 },
    padding: theme.spacing(8, 0, 6),
    height: "70vh",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Fashion(props) {
  const classes = useStyles();
  const {
    products,
    getProducts,
    addAndDeleteProductInCart,
    checkProductInCart,

    addAndDeleteProductInSelect,
    checkProductInSelect,

    pageTask,
    setPage,
    page,

    totalCount,
    getProductsFashion,
  } = useContext(productsContext);

  const history = useHistory();
  const search = new URLSearchParams(history.location.search);

  function fetchParams(params, value) {
    if (value === "All") {
      // props.history.push('/')
      props.history.push(props.location.pathname.replace(params));
      getProducts();
      return;
    }
    let search = new URLSearchParams(props.history.location.search);
    search.set(params, value);
    let url = `${props.location.pathname}?${search.toString()}`;
    props.history.push(url);
    console.log(params);
    getProducts();
  }

  useEffect(() => {
    getProductsFashion();
    getProducts();
  }, []);

  return (
    <div>
      <Header />

      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              ></Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              ></Typography>
            </Container>
          </div>

          <div className={classes.heroButtons}>
            <Container className="filters">
              <UncontrolledDropdown inNavbar>
                <DropdownToggle nav caret>
                  Prices
                </DropdownToggle>
                <DropdownMenu
                  aria-label="price"
                  name="price"
                  onClick={(event) =>
                    fetchParams("price_lte=", event.target.value)
                  }
                >
                  <DropdownItem value="2000"> below 2000</DropdownItem>
                  <DropdownItem value="3000"> below 3000</DropdownItem>
                  <DropdownItem value="4000">below 6000</DropdownItem>
                  <DropdownItem value="500000">below 500000</DropdownItem>
                  <DropdownItem value="All">ALL</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown inNavbar>
                <DropdownToggle nav caret>
                  Categories
                </DropdownToggle>
                <DropdownMenu
                  right
                  aria-label="category"
                  name="category"
                  onClick={(event) =>
                    fetchParams("category", event.target.value)
                  }
                >
                  <DropdownItem value="Paintings">Paintings</DropdownItem>
                  <DropdownItem value="Sculptures">Sculptures</DropdownItem>
                  <DropdownItem value="Decor">Decor</DropdownItem>
                  <DropdownItem value="Assesories">Assesories</DropdownItem>

                  <DropdownItem value="All">All</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Container>
          </div>

          {/* MAP PRODUCT */}

          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {products.map((item) => (
                <>
                  <Grid item key={classes.card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={item.image}
                        title={item.title}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {item.title}
                        </Typography>
                        {/* <Typography>
                        {item.description}
                        </Typography> */}
                      </CardContent>
                      <CardActions
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Link to={`/productcart/${item.id}`}></Link>

                        <Button
                          size="small"
                          onClick={() => addAndDeleteProductInCart(item)}
                          color={
                            checkProductInCart(item.id) ? "primary" : "initial"
                          }
                        >
                          <ShoppingCartIcon />
                        </Button>

                        <Button
                          size="small"
                          color="initial"
                          href={`/productcart/${item.id}`}
                        >
                          <FindInPageIcon />
                        </Button>

                        <Button
                          size="small"
                          onClick={() => addAndDeleteProductInSelect(item)}
                          color={
                            checkProductInSelect(item.id)
                              ? "primary"
                              : "initial"
                          }
                        >
                          <FavoriteIcon />
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </>
              ))}
            </Grid>
          </Container>
        </main>

        {/* MAP PRODUCT */}

        {/* PAGINATION */}
        <Container>
          <div>
            <Pagination
              onChange={(e, newpage) => pageTask(newpage)}
              page={parseInt(search.get("_page")) || 1}
              count={Math.ceil(totalCount / 6)}
              defaultPage={1}
            />
          </div>
        </Container>

        {/* PAGINATION */}
      </React.Fragment>
    </div>
  );
}
