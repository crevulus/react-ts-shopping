import React, { useRef, useEffect, lazy, Suspense } from "react";

import gsap from "gsap";

import Grid from "@material-ui/core/Grid";

import { CartItemType } from "../../views/Home";
import ErrorBoundary from "../../utils/ErrorBoundary";
const Item = lazy(() => import("../Item/Item"));

export type ItemGridProps = {
  items: CartItemType[];
  data: any;
  handleAddToCart: (clickedItem: CartItemType) => void;
  handleClickItem: (
    clickedItem: CartItemType,
    e: React.MouseEvent<HTMLDivElement>
  ) => void;
};

function ItemGrid({
  items,
  data,
  handleClickItem,
  handleAddToCart,
}: ItemGridProps) {
  let itemRef = useRef([]);

  useEffect(() => {
    gsap.from(itemRef.current, {
      autoAlpha: 0,
      stagger: 0.2,
    });
  }, [data]);

  return (
    <Grid container spacing={3}>
      {items?.map((item: CartItemType, i: number) => (
        <ErrorBoundary key={item.id} fallback="Couldn't load the item">
          <Suspense fallback="Loading item...">
            <Grid
              item
              xs={12}
              sm={4}
              // @ts-ignore
              ref={(element: HTMLDivElement) => {
                // @ts-ignore
                itemRef.current[i] = element;
              }}
            >
              <Item
                item={item}
                handleAddToCart={handleAddToCart}
                clickItem={handleClickItem}
              />
            </Grid>
          </Suspense>
        </ErrorBoundary>
      ))}
    </Grid>
  );
}

export default React.memo(ItemGrid);
