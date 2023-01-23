import "./cart-icon.styles.scss";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)
  

  const toggleIsCartOpen =()=> setIsCartOpen(!isCartOpen) 

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
