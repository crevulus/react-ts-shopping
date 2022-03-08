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
  const throwError = () => {
    throw new Error("This is a test error for logrocket");
  };
  const throwThirdError = () => {
    console.error(
      "this is a third test for logrocket, this time with console.error in Buttons"
    );
  };
  return (
    <>
      <StyledSlideButton onClick={handleClick}>Copy</StyledSlideButton>
      <StyledDropButton onClick={throwError}>No fn</StyledDropButton>
      <StyledGrowButton onClick={throwThirdError}>No fn</StyledGrowButton>
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
