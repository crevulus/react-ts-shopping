import styled from "styled-components";

export const StyledItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid lightblue;
  border-radius: 20px;
  background: linear-gradient(
      -225deg,
      rgba(255, 255, 255, 0.5) 40%,
      rgba(255, 0, 0, 0.5)
    )
    fixed;

  button {
    border-radius: 0 0 20px 20px;
  }
`;

export const StyledVisualWrapper = styled.div`
  position: relative;
  max-height: 50%;

  &::before {
    display: block;
    overflow: hidden;
    padding-bottom: 100%;
    content: "";
  }
  picture {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    img {
      border-radius: 20px 20px 0 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const StyledItemInfo = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem;
  height: 100%;
  overflow: hidden;
`;
