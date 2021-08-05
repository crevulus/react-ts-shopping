import React from "react";
import {
  StyledDropButton,
  StyledGrowButton,
  StyledSlideButton,
  StyledLink,
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
      <ul style={{ listStyleType: "none", display: "flex" }}>
        <li style={{ overflow: "hidden" }}>
          <StyledLink>Test</StyledLink>
        </li>
        <li style={{ overflow: "hidden" }}>
          <StyledLink>Test</StyledLink>
        </li>
      </ul>
    </>
  );
}
