//@ts-nocheck
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { ContactShadows, softShadows } from "@react-three/drei";

export function Box(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef();
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
    <mesh {...props} castShadow ref={mesh} scale={1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
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

export {};
