import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./container/Home/Home";
import Footer from "./container/Home/Footer/Footer";
// import Admin from "./container/AdminPage/Admin";
import AddProduct from "./container/AdminPage/AddProduct";
import EditProduct from "./container/AdminPage/EditProduct";
import ProductsContextProvider from "../src/contexts/ProductsContext";
import Cart from "./container/Cart/Cart";
import ProductCard from "./container/ProductCard/ProductCard";

import Fashion from "./container/FashionShop/Fashion";

import Admin from "./container/AdminPage/Admin";
import Select from "./container/Cart/Select";

// import { Link } from 'react-router';

import AuthContextProvider from "./contexts/AuthContext";
import SignIn from "./container/Home/SignIn/SignIn";
import SignUp from "./container/Home/SignUp/SignUp";
import AddressForm from "./container/Checkout/AddressForm";
import PaymentForm from "./container/Checkout/Payment";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <ProductsContextProvider>
          <Switch>
            <Route exact path="/" component={Home} />;
          </Switch>
        </ProductsContextProvider>

        <ProductsContextProvider>
          <Switch>
            <Route exact path="/admin" component={Admin} />

            <Route exact path="/addproduct" component={AddProduct} />
            <Route exact path="/edit" component={EditProduct} />
            <Route exact path="/fashion" component={Fashion} />

            <Route exact path="/select" component={Select} />

            <Route exact path="/cart" component={Cart} />
            <Route exact path="/address" component={AddressForm} />
            <Route exact path="/payment" component={PaymentForm} />

            <Route exact path="/productcart/:id" component={ProductCard} />

            <AuthContextProvider>
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
            </AuthContextProvider>
          </Switch>
          <Footer />
        </ProductsContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
