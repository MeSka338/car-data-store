import React from "react";
import { useGLTF } from "@react-three/drei";

export const Model = React.memo((props) => {
  const { Ref, nodes, materials, material } = props;
  return (
    <group
      {...props}
      dispose={null}
      scale={2}
      position={[0, -0.5, 0]}
      rotation={[0, 1.8 * Math.PI, 0]}
      ref={Ref}
    >
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.White}
        />
      </group>
    </group>
  );
});

useGLTF.preload("/muscle_car_classic_blue_low_poly.glb");
