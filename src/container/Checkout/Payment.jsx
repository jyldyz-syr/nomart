import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Container } from "reactstrap";
import Header from "../GlobalHeader/HeaderHome";
import { Link } from "react-router-dom";
import { productsContext } from "../../contexts/ProductsContext";
import { calcTotalPrice } from "../../helpers/calcPrice";

export default function PaymentForm() {
  const { cartData } = useContext(productsContext);

  return (
    <Container>
      <Header />

      <React.Fragment>
        <Typography
          variant="h6"
          gutterBottom
          style={{
            marginBottom: "2%",
          }}
        >
          Payment method
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          style={{
            marginBottom: "2%",
          }}
        >
          Total: {calcTotalPrice(cartData.products)}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              label="Expiry date"
              fullWidth
              autoComplete="cc-exp"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveCard" value="yes" />
              }
              label="Remember credit card details for next time"
            />
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Link to="/">Home</Link>
          </div>
        </Grid>
      </React.Fragment>
    </Container>
  );
}
