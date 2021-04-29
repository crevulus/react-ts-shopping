import React from "react";

import { StyledCheckbox } from "./CheckboxRadio.styles";

export default function CheckboxRadio() {
  return (
    <div>
      <StyledCheckbox type="checkbox" id="test-check" checked={true} />
      <label htmlFor="test-check">Label</label>
    </div>
  );
}
