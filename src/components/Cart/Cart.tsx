import { CartItemType } from "../../App";

import CartItem from "../CartItem/CartItem";

import { StyledCartWrapper } from "./Cart.styles";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <StyledCartWrapper>
      <p>Your shopping cart</p>
      {cartItems.length === 0 && <p>No items in cart</p>}
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          cartItem={cartItem}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </StyledCartWrapper>
  );
};

export default Cart;
