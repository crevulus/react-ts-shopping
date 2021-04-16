import { CartItemType } from "../../App";

import Button from "@material-ui/core/Button";

import { StyledItemWrapper, StyledItemInfo } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
  clickItem: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart, clickItem }) => (
  <StyledItemWrapper
    className={item.animation}
    onClick={() => {
      clickItem(item);
    }}
  >
    <picture>
      <img src={item.image} alt={item.title} />
    </picture>
    <StyledItemInfo>
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>${item.price.toFixed(2)}</p>
    </StyledItemInfo>
    <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
  </StyledItemWrapper>
);

export default Item;
