import { CartItemType } from "../../App";

import Button from "@material-ui/core/Button";

import {
  StyledItemWrapper,
  StyledItemInfo,
  StyledVisualWrapper,
} from "./Item.styles";

export type ItemProps = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
  clickItem: (
    clickedItem: CartItemType,
    e: React.MouseEvent<HTMLDivElement>
  ) => void;
};

const Item: React.FC<ItemProps> = ({ item, handleAddToCart, clickItem }) => (
  <StyledItemWrapper
    className={item.animation}
    onClick={(e) => {
      clickItem(item, e);
    }}
  >
    <StyledVisualWrapper>
      <picture>
        <img src={item.image} alt={item.title} />
      </picture>
    </StyledVisualWrapper>
    <StyledItemInfo>
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>${item.price.toFixed(2)}</p>
    </StyledItemInfo>
    <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
  </StyledItemWrapper>
);

export default Item;
