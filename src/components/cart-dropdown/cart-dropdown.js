import React from "react";
import './cart-dropdown.styles.scss';
//importing components
import CustomButton from "../custom-button/custom-button";
import CartItem from '../cart-item/cart-item';
//connecting to rdeux store
import { connect } from 'react-redux';

const CartDropdown = ({cartItems}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    cartItems : state.cart.cartItems
  }
}

export default connect(mapStateToProps, null )(CartDropdown);
