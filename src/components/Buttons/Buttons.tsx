import React from "react";
import {
  StyledDropButton,
  StyledGrowButton,
  StyledSlideButton,
} from "./Buttons.styles";

type ButtonProps = {
  handleClick?: () => void;
};

export default function Buttons({ handleClick }: ButtonProps) {
  return (
    <>
      <StyledSlideButton onClick={handleClick}>Copy</StyledSlideButton>
      <StyledDropButton>No fn</StyledDropButton>
      <StyledGrowButton>No fn</StyledGrowButton>
    </>
  );
}
