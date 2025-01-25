import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Sphere = () => {
  const sphereRef = useRef(null);

  useFrame(() => {
    sphereRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[3, 15, 15]} />
      <meshStandardMaterial color="#48c3f4" wireframe />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={3} />
      <pointLight position={[-3, -3, 2]} />
      <Sphere />
    </Canvas>
  );
};
const Globe = () => {
  return (
    <div
      style={{
        maxWidth: "350px",
      }}
    >
      <ThreeScene />
    </div>
  );
};

export default Globe;
