import styled from "styled-components";

export const StyledCheckbox = styled.input<{ checked: boolean }>`
  @supports (accent-color: green) {
    accent-color: green;
  }
`;
