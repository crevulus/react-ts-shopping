import styled from "styled-components";

export const StyledItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  border: 1px solid lightblue;
  border-radius: 20px;
  &::before {
    display: block;
    padding-bottom: 100%;
    content: "";
  }
  picture {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    max-height: 50%;
    img {
      border-radius: 20px 20px 0 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  button {
    border-radius: 0 0 20px 20px;
  }
`;

export const StyledItemImage = styled.img``;

export const StyledItemInfo = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem;
  height: 100%;
`;
