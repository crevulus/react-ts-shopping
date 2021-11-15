import { fireEvent, render, screen } from "@testing-library/react";
import CartItem from "../CartItem";
import "@testing-library/jest-dom";

const mockData = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: "{count: 120, rate: 3.9}",
  animation: "item",
  amount: 1,
};

it("should render a cart item", () => {
  render(<CartItem cartItem={mockData} />);
  const element = screen.getByRole("button", { name: "=" });
  expect(element).toBeInTheDocument();
});
