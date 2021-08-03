import React, { useState } from "react";
import useCopy from "../../hooks/useCopy";
import Buttons from "../Buttons/Buttons";

import { StyledInput } from "./Input.styles";

export default function Input() {
  const [inputValue, setInputValue] = useState("");
  const [isCopied, handleCopy] = useCopy({ resetInterval: 3000 });

  const handleClick = () => {
    handleCopy(inputValue);
  };

  return (
    <div>
      <StyledInput
        onChange={(e) => setInputValue(e.target.value)}
        id="input"
        type="number"
        min="2"
        max="5"
      />
      <Buttons handleClick={handleClick} />
      {isCopied && <p>Copied to clipboard!</p>}
    </div>
  );
}
