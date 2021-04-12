import styled from "styled-components";

export const StyledCartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;
  div {
    flex: 1;
  }
`;

export const StyledSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledImage = styled.img`
  max-width: 80px;
  object-fit: cover;
  margin-left: 4px;
`;
