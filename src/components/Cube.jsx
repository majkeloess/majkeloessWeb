import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function index() {
  return (
    <div className="w-[300px] h-[300px]">
      <Canvas >
        <ambientLight intensity={1} />
        {/* <             OrbitControls enableZoom={false} enablePan={false}/> */}
        <directionalLight position={[2, 1, 1]} />

        <Cube  />
      </Canvas>
    </div>
  );
}

function Cube() {
  const mesh = useRef(null);

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.15;

    mesh.current.rotation.y += delta * 0.15;

    mesh.current.rotation.z += delta * 0.15;
  });

  const texture_1 = useLoader(TextureLoader, "/src/img/1.jpeg");

  const texture_2 = useLoader(TextureLoader, "/src/img/2.jpeg");

  const texture_3 = useLoader(TextureLoader, "/src/img/3.jpeg");

  const texture_4 = useLoader(TextureLoader, "/src/img/4.jpeg");

  const texture_5 = useLoader(TextureLoader, "/src/img/5.jpeg");

  const texture_6 = useLoader(TextureLoader, "/src/img/6.jpeg");

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />

      <meshStandardMaterial map={texture_1} attach="material-0" />

      <meshStandardMaterial map={texture_2} attach="material-1" />

      <meshStandardMaterial map={texture_3} attach="material-2" />

      <meshStandardMaterial map={texture_4} attach="material-3" />

      <meshStandardMaterial map={texture_5} attach="material-4" />

      <meshStandardMaterial map={texture_6} attach="material-5" />
    </mesh>
  );
}
