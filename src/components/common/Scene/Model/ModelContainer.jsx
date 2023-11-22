import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { Model } from "./Model";

export const ModelContainer = React.memo((props) => {
  const { nodes, materials } = useGLTF("/muscle_car_classic_blue_low_poly.glb");
  const [animation, setAnimation] = useState(props.animation);
  const ref = useRef();

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(props.carColor),
        metalness: 0.7,
        roughness: 0.2,
      }),
    [props.carColor]
  );

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
    <Model material={material} Ref={ref} nodes={nodes} materials={materials} />
  );
});

useGLTF.preload("/muscle_car_classic_blue_low_poly.glb");
