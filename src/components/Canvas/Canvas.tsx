//@ts-nocheck
import React, { Suspense } from "react";
import { FloorPlane, Box } from "../BoxShadow/BoxShadow";
import Model from "../Model/Model";
import { StyledCanvas } from "./Canvas.styles";

export const Canvas = () => {
  return (
    <StyledCanvas
      colorManagement
      shadows
      shadowMap
      camera={{ position: [-5, 2, 10], fov: 100 }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} castShadow />
      <FloorPlane />
      {/* <Suspense fallback={null}>
        <Model modelPath="/ceramic_teapot/scene.gltf" />
      </Suspense> */}
      <Box position={[-1.2, 0, 0]} direction="left" />
      <Box position={[1.2, 0, 0]} direction="right" />
    </StyledCanvas>
  );
};
