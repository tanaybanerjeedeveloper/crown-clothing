import React from "react";
import './cart-dropdown.styles.scss';
import { withRouter } from 'react-router-dom';
//importing components
import CustomButton from "../custom-button/custom-button";
import CartItem from '../cart-item/cart-item';
//connecting to rdeux store
import { connect } from 'react-redux';
//importing selectors
import { selectCartItems } from '../../redux/cart/cart-selectors';
//importing action
import { toggleCartHidden } from '../../redux/cart/cart-actions';


const CartDropdown = ({cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          (cartItems.length) ? (
          cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
          ) :
          ( <span className='empty-message'>Your cart is empty</span> )
        }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    cartItems : selectCartItems(state)
  }
}

export default withRouter(connect(mapStateToProps)(CartDropdown));
//here connect will automatically pass a dispatch method as props to the component, if we don't pass 'mapDispathToProps'
//to the connect.
