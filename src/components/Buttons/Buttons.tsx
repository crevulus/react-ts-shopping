import React from "react";
import { trackEvent } from "../../utils/track";
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

  const handleLocalStorage = () => {
    window.localStorage.setItem("allowCookies", "true");
    window.dispatchEvent(new Event("storage"));

    trackEvent(
      {
        id: "local-storage",
      },
      { type: "click" }
    );
  };

  return (
    <>
      <StyledSlideButton onClick={handleClick}>Copy</StyledSlideButton>
      <StyledDropButton onClick={throwError}>Throw error</StyledDropButton>
      <StyledGrowButton onClick={throwThirdError}>
        Console error
      </StyledGrowButton>
      <StyledGrowButton onClick={handleLocalStorage}>
        Local Storage
      </StyledGrowButton>
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
