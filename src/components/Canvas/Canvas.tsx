//@ts-nocheck
import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { StyledCanvas } from "./Canvas.styles";

import { ContactShadows, softShadows } from "@react-three/drei";

function Box(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(() => {
    if (props.direction === "left") {
      return (mesh.current.rotation.x = mesh.current.rotation.y += 0.01);
    } else {
      return (mesh.current.rotation.x = mesh.current.rotation.y -= 0.01);
    }
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      castShadow
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

softShadows();

export function FloorPlane() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" transparent />
      <ContactShadows />
    </mesh>
  );
}

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
      <Box position={[-1.2, 0, 0]} direction="left" />
      <Box position={[1.2, 0, 0]} direction="right" />
    </StyledCanvas>
  );
};
