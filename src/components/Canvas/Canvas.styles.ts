import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

export const StyledCanvas = styled(Canvas)`
  width: 100vh;
  height: 100vh;
  position: fixed !important;
  z-index: -1;
  top: 0;
  left: 0;
`;
