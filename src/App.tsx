import { useState, useEffect } from "react";
import { useQuery } from "react-query";

import Item from "./components/Item/Item";
import Cart from "./components/Cart/Cart";

import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { StyledAppWrapper, StyledCartButton } from "./App.styles";

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

const App = () => {
  const [items, setItems] = useState([] as CartItemType[]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts,
    { onSuccess: setItems }
  );

  useEffect(() => console.log("reload"));

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
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
  };

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

  const clickItem = (item: CartItemType) => {
    let tempItems = [...items];
    // @ts-ignore
    tempItems[item.id - 1].animation = "item animate__animated animate__pulse";
    setItems(tempItems!);
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong</div>;

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
        <Grid container spacing={3}>
          {items?.map((item: CartItemType) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item
                item={item}
                handleAddToCart={handleAddToCart}
                clickItem={clickItem}
              />
            </Grid>
          ))}
        </Grid>
      </StyledAppWrapper>
    </div>
  );
};

export default App;
