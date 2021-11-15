import React, { useState } from "react";
import useCopy from "../../hooks/useCopy";
import Buttons from "../Buttons/Buttons";

import { StyledInput } from "./Input.styles";

export default function Input() {
  const [inputValue, setInputValue] = useState("");
  const [isCopied, copiedText, copiedTextLength, handleCopy] = useCopy({
    resetInterval: 3000,
  });

  const handleClick = () => {
    handleCopy(inputValue);
  };

  return (
    <div>
      <StyledInput id="input-number" type="number" min="2" max="5" />
      <StyledInput
        onChange={(e) => setInputValue(e.target.value)}
        id="input-text"
        type="text"
      />
      <Buttons handleClick={handleClick} />
      {isCopied && <p>Copied to clipboard!</p>}
      <p>{copiedText}</p>
      {copiedText ? (
        <p>Your copied text is {copiedTextLength} characters long.</p>
      ) : null}
    </div>
  );
}
