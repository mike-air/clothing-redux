import "./cart-dropdown.component.scss";
import { useContext } from "react";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../context/cart.context";
const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      {console.log(cartItems.length)}
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button>Check Out</Button>
    </div>
  );
};

export default CartDropDown;
