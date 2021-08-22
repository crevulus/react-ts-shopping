import { MutableRefObject, useRef, useEffect } from "react";
import gsap from "gsap/all";

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

const Item: React.FC<ItemProps> = ({ item, handleAddToCart, clickItem }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const tl = useRef<any>(null);

  useEffect(() => {
    tl.current = gsap.to(itemRef.current, { scale: 1.05, paused: true });
  }, []);

  const onEnter = () => {
    tl.current.play();
  };

  const onLeave = () => {
    tl.current.reverse();
  };

  return (
    <StyledItemWrapper
      className={item.animation}
      onClick={(e) => {
        clickItem(item, e);
      }}
      ref={itemRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
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
};

export default Item;
