import { StyledCartItemWrapper } from "./CartItem.styles";

import Button from "@material-ui/core/Button";

import { CartItemType } from "../../App";
import Item from "../Item/Item";

type Props = {
  cartItem: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ cartItem, addToCart, removeFromCart }) => (
  <StyledCartItemWrapper>
    <div>
      <p>{cartItem.title}</p>
      <div>
        <p>Price: ${cartItem.price}</p>
        <p>Total: ${(cartItem.amount * cartItem.price).toFixed(2)}</p>
      </div>
      <div>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(cartItem.id)}
        >
          -
        </Button>
        <p>{cartItem.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(cartItem)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={cartItem.image} alt={cartItem.title} />
  </StyledCartItemWrapper>
);

export default CartItem;
