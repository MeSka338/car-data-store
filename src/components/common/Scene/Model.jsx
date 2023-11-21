import React, { useCallback, useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

export const Model = React.memo((props) => {
  const { nodes, materials } = useGLTF("/muscle_car_classic_blue_low_poly.glb");
  const [animation, setAnimation] = useState(props.animation);
  const ref = useRef();
  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color(props.carColor),
    metalness: 0.7,
    roughness: 0.2,
  });

  const midelAnimation = useCallback(() => {
    gsap.from(ref.current.rotation, {
      ease: "power4.out",
      duration: 4,
      y: 2 * Math.PI,
    });
    gsap.from(ref.current.position, {
      duration: 3,
      y: -3,
      ease: "power4.out",
    });
    gsap.to(ref.current.scale, {
      duration: 3,
      x: 2.5,
      y: 2.5,
      z: 2.5,
      ease: "power4.out",
    });
  }, []);
  useEffect(() => {
    if (animation) {
      midelAnimation();
    }
  }, [animation]);
  return (
    <group
      {...props}
      dispose={null}
      scale={2}
      position={[0, -0.5, 0]}
      rotation={[0, 1.8 * Math.PI, 0]}
      ref={ref}
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
