import {
  StyledCartItemWrapper,
  StyledSubContainer,
  StyledImage,
} from "./CartItem.styles";

import Button from "@material-ui/core/Button";

import { CartItemType } from "../../App";

type Props = {
  cartItem: CartItemType;
  addToCart?: (clickedItem: CartItemType) => void;
  removeFromCart?: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ cartItem, addToCart, removeFromCart }) => (
  <StyledCartItemWrapper>
    <div>
      <p>{cartItem.title}</p>
      <StyledSubContainer>
        <p>Price: ${cartItem.price.toFixed(2)}</p>
        <p>Total: ${(cartItem.amount * cartItem.price).toFixed(2)}</p>
      </StyledSubContainer>
      <StyledSubContainer>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart && removeFromCart(cartItem.id)}
        >
          -
        </Button>
        <p>{cartItem.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart && addToCart(cartItem)}
        >
          +
        </Button>
      </StyledSubContainer>
    </div>
    <StyledImage src={cartItem.image} alt={cartItem.title} />
  </StyledCartItemWrapper>
);

export default CartItem;
