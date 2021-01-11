import React, { useContext, useState, useEffect } from "react";

import { productsContext } from "../../contexts/ProductsContext";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root1: {
    padding: "40px",
  },
  timelinemain: {
    margin: "30px",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },

  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary,
  },
  titleBar: {
    background: "Transparent",
  },
}));

export default function Products() {
  const [activeTab, setActiveTab] = useState("1");

  const {
    addAndDeleteProductInCart,
    checkProductInCart,
    products,
    getProducts,
    pageTask,
    setPage,
    page,
  } = useContext(productsContext);

  useEffect(() => {
    getProducts();
    pageTask(page);
  }, [page]);

  const classes = useStyles();

  return (
    <div className="productsDiv">
      <div className={classes.root1}>
        <Container xs="8"></Container>

        <div className={classes.root} style={{ height: "40vh" }}>
          <GridList className={classes.gridList} cols={4}>
            {products.map((item) => (
              <GridListTile key={item.id} style={{ height: "40vh" }}>
                <Link
                  to={`/productcart/${item.id}`}
                  className={classes.root3}
                  key={item.id}
                  style={{ height: "40vh" }}
                >
                  <img
                    className="imageproduct"
                    src={item.image}
                    alt={item.title}
                    style={{ height: "40vh", padding: "10px" }}
                  />
                </Link>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    </div>
  );
}
