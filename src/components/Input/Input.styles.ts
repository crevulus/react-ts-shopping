import styled from "styled-components";

export const StyledInput = styled.input`
  width: 5rem;
  &:in-range {
    border: 1px solid green;
  }
  &:out-of-range {
    border: 1px solid red;
  }
`;
