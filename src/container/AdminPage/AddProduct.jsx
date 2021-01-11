import React, { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../../contexts/ProductsContext";
import { FormGroup, Label, Input, FormText } from "reactstrap";
import Header from "../../container/GlobalHeader/HeaderHome";

const AddProduct = () => {
  const [product, setProduct] = useState({});

  const { addProduct, products } = useContext(productsContext);

  function handleInputsValue(e) {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };

    console.log(products);
    console.log(obj);

    setProduct(obj);
  }

  return (
    <div>
      <Header />
      <Fragment>
        <div className="container EditProduct">
          <h3>Add Product</h3>
          <br />
          <br />

          <form>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Product Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                onChange={handleInputsValue}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                onChange={handleInputsValue}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Price</label>
              <input
                type="text"
                className="form-control"
                name="price"
                onChange={handleInputsValue}
              />
            </div>
            <br />

            <FormGroup>
              <Label for="exampleFile">Add Image</Label>
              <Input type="text" name="image" onChange={handleInputsValue} />
              <FormText color="muted">
                This is some placeholder block-level help text for the above
                input. It`s a bit lighter and easily wraps to a new line.
              </FormText>
            </FormGroup>

            <br />

            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => addProduct(product)}
            >
              Save Product
            </button>
            <Link to="/admin">
              <button type="button" className="btn btn-warning mx-3">
                Show Products
              </button>
            </Link>
          </form>
        </div>
      </Fragment>
    </div>
  );
};

export default AddProduct;
