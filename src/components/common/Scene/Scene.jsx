import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ModelContainer } from "./Model/ModelContainer";

const Scene = React.memo(({ color, orbit, animation }) => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 7] }}>
        <pointLight intensity={20} color={"white"} position={[0, 6, 0]} />
        <ambientLight intensity={2} color={"white"} />
        <pointLight position={[2, 1, 0]} intensity={5} />
        <pointLight position={[-0.5, 1, 1]} intensity={5} />
        <ModelContainer carColor={color} animation={animation} />
        {orbit && <OrbitControls />}
      </Canvas>
    </>
  );
});

export default Scene;
