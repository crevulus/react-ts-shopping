import React from "react";

import { StyledInput } from "./Input.styles";

export default function Input() {
  return (
    <div>
      <StyledInput type="number" min="2" max="5" />
    </div>
  );
}
