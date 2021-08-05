import styled from "styled-components";

const BaseButton = styled.button`
  position: relative;
  background-color: #ff583d;
  color: #222224;
  border: none;
  margin: 1rem;
  margin-bottom: 3.2rem;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  overflow: hidden; // because before pseudoselector is positioned absolute in relation to the main button, it overflows off the box of the main button. We want it to be hidden initially.
  padding: 1.2rem 1.2rem;
  transition: all 0.3s ease-out;
  cursor: pointer;
`;

export const StyledSlideButton = styled(BaseButton)`
  &:before {
    content: ""; // need that in order to see a pseudo-element
    position: absolute;
    left: 0;
    top: 0;
    background-color: darkblue;
    height: 100%;
    width: 100%;
    z-index: -1; // don't want it to show until we animate it in
    transform-origin: bottom left; // defines where transformation originates from (center by default)
    transform: translateX(-10rem);
    transition: transform 0.5s; // transform should take 0.5s
  }

  &:hover {
    color: white;
    background-color: transparent;
  }
  &:hover:before {
    transform: translateX(0);
  }
`;

export const StyledDropButton = styled(BaseButton)`
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: darkblue;
    height: 100%;
    width: 100%;
    z-index: -1;
    transform: translateY(
      -100%
    ); // makes it sit right on top of the main button
    transition: transform 0.3s ease-out;
  }

  &:hover {
    color: white;
    background-color: transparent;
  }
  &:hover:before {
    transform: translateY(0);
  }
`;

export const StyledGrowButton = styled(BaseButton)`
  &:hover {
    transform: translateY(-0.5rem) scale(1.1);
    background-color: darkblue;
    color: white;
  }
`;

export const StyledLink = styled.a`
  position: relative; // when we create a new element we can position it relative to our link
  overflow: hidden;
  font-family: Roboto, sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: none;
  color: #3a3a3d;
  transition: all 0.3s ease-out;

  &:after {
    content: "";
    display: block; // so it's underneath and not inline
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0.5rem;
    background-color: red;
    opacity: 0.5;
    transform: translateX(-100%);
    transition: all 0.3s ease-out;
  }

  &:hover {
    color: darkblue;
    transition: all 0.3s ease-out;
  }
  &:hover:after {
    transform: translateX(0);
    transition: all 0.3s ease-out;
  }
`;
