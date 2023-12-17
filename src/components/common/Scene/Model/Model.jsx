import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export const Model = React.memo(
  ({ modelAnimation, modelRef, animation, carColor }) => {
    const { nodes, materials } = useGLTF(
      "/muscle_car_classic_blue_low_poly.glb"
    );

    useEffect(() => {
      if (animation) {
        modelAnimation();
      }
    }, [animation]);
    return (
      <group
        dispose={null}
        scale={2}
        position={[0, -0.5, 0]}
        rotation={[0, 1.8 * Math.PI, 0]}
        ref={modelRef}
      >
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={
              new THREE.MeshStandardMaterial({
                color: new THREE.Color(carColor),
                metalness: 0.7,
                roughness: 0.2,
              })
            }
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
  }
);

useGLTF.preload("/muscle_car_classic_blue_low_poly.glb");
