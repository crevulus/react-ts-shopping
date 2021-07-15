import styled from "styled-components";

export const StyledCartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 1rem;
  padding: 2rem;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: inset -20px 20px 60px #d9d9d9, inset 20px -20px 60px #ffffff;
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
