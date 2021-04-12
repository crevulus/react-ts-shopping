import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const StyledAppWrapper = styled.div`
  margin: 40px;
`;

export const StyledCartButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  top: 20px;
  right: 20px;
`;
