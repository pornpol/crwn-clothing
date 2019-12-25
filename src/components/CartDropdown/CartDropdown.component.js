import React from "react";
import "./CartDropdown.style.scss";

import { connect } from "react-redux";

import CustomButton from "../CustomButton/CustomButton.component";
import CartItem from "../CartItem/CartItem.component";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
