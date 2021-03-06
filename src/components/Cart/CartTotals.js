import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart, checkoutMeal } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <Link to="/">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-3"
              type="button"
              onClick={() => {
                clearCart();
              }}
            >
              clear cart
            </button>
          </Link>
          <h5>
            <span className="text-title">Subtotal :</span>
            <strong> KSH {cartSubTotal}</strong>
          </h5>
          <h5>
            <span className="text-title">Tax :</span>
            <strong> KSH {cartTax}</strong>
          </h5>
          <h5>
            <span className="text-title">Total :</span>
            <strong> KSH {cartTotal}</strong>
          </h5>
          <button
            className="btn btn-outline-primary text-uppercase mb-3 px-3"
            type="button"
            onClick={() => {
              checkoutMeal();
            }}
          >
            buy meal
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
