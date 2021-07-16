//@ts-nocheck
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Model({ modelPath }) {
  const mesh = useRef();
  const { scene } = useGLTF(modelPath, true);

  useFrame(() => {
    return (mesh.current.rotation.y -= 0.01);
  });

  return (
    <mesh castShadow ref={mesh} position={[0, 0, 0]}>
      <primitive object={scene} dispose={null} />
    </mesh>
  );
}
