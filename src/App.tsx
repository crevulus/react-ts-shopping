import { useState, Suspense, lazy, useCallback } from "react";

import { useQuery } from "react-query";

import Cart from "./components/Cart/Cart";

import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Badge from "@material-ui/core/Badge";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { StyledAppWrapper, StyledCartButton } from "./App.styles";
import CheckboxRadio from "./components/CheckboxRadio/CheckboxRadio";
import Input from "./components/Input/Input";
import { Canvas } from "./components/Canvas/Canvas";

type CameraType = {
  position: Array<number>;
  fov: number;
};

declare module "react" {
  interface HTMLCanvasElement {
    colorManagement?: boolean;
    shadow?: boolean;
    shadowMap?: boolean;
    camera?: CameraType;
  }
}

const ItemGrid = lazy(() => import("./components/ItemGrid/ItemGrid"));

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  animation?: string;
};

const getProducts = async (): Promise<CartItemType[]> => {
  const products = await fetch("https://fakestoreapi.com/products")
    .then((data) => data.json())
    .then((array) =>
      array.map((obj: CartItemType) => ({ ...obj, animation: "item" }))
    );
  return await products;
};

export const clickItem = (
  items: CartItemType[],
  setItems: (items: CartItemType[]) => void,
  item: CartItemType
) => {
  let tempItems = [...items];
  const target = tempItems[item.id - 1];
  // @ts-ignore
  target.animation = "item animate__animated animate__pulse";
  setItems(tempItems);
};

const App = () => {
  const [items, setItems] = useState([] as CartItemType[]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, error } = useQuery<CartItemType[]>("products", getProducts, {
    onSuccess: setItems,
  });

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);

  const handleAddToCart = useCallback((clickedItem: CartItemType) => {
    setCartItems((prevState) => {
      // check if item is in cart by looking for id of clicked item in array of cartItems already in state
      const isItemInCart = prevState.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        // search for item id matching clicked item; increment that amount
        return prevState.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prevState, { ...clickedItem, amount: 1 }];
    });
  }, []);

  const handleRemoveFromCart = (clickedId: number) => {
    setCartItems((prevState) =>
      // init accumulator as empty array for CartItemType objs. Iterate over prevState carItems.
      prevState.reduce((acc, item) => {
        if (item.id === clickedId) {
          // cartItem id & clicked id match => push item to accumulator with a decremented amount value
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          // else just push item to accumulator
          return [...acc, item];
        }
      }, [] as CartItemType[])
    );
  };

  const handleClickItem = useCallback(
    (item: CartItemType, e: React.MouseEvent<HTMLDivElement>) => {
      clickItem(items, setItems, item);
    },
    [items]
  );

  if (error) return <div>Something went wrong -- panic!</div>;

  return (
    <div className="App">
      <StyledAppWrapper>
        <Drawer
          anchor="right"
          open={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        >
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </Drawer>
        <StyledCartButton onClick={() => setIsCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShoppingCartIcon />
          </Badge>
        </StyledCartButton>
        <Input />
        <CheckboxRadio />
        <Canvas />
        <Suspense fallback={<LinearProgress />}>
          <ItemGrid
            items={items}
            data={data}
            handleClickItem={handleClickItem}
            handleAddToCart={handleAddToCart}
          />
        </Suspense>
      </StyledAppWrapper>
    </div>
  );
};

export default App;
