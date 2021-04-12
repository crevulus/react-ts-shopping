import styled from "styled-components";

export const StyledItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
`;

export const StyledItemInfo = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem;
  height: 100%;
`;
