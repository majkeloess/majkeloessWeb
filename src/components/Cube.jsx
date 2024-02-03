import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls } from "@react-three/drei";

export default function index() {
  return (
    <div className="w-[300px] h-[300px]">
      <Canvas>
        <ambientLight intensity={1.5} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <directionalLight position={[2, 1, 1]} />

        <Cube />
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

  const texture_1 = useLoader(
    TextureLoader,
    "https://res.cloudinary.com/dq5exroyd/image/upload/v1704822316/v9rqey4vezontt9d4ada.jpg",
  );

  const texture_2 = useLoader(
    TextureLoader,
    "https://res.cloudinary.com/dq5exroyd/image/upload/v1704822316/kdsgu2opsbnhkedkl1zr.jpg",
  );

  const texture_3 = useLoader(
    TextureLoader,
    "https://res.cloudinary.com/dq5exroyd/image/upload/v1704822315/doj15kinat9wkh4ogkn6.jpg",
  );

  const texture_4 = useLoader(
    TextureLoader,
    "https://res.cloudinary.com/dq5exroyd/image/upload/v1704822315/qosp7uasxp8bapc30sbp.jpg",
  );

  const texture_5 = useLoader(
    TextureLoader,
    "https://res.cloudinary.com/dq5exroyd/image/upload/v1704822315/rjcpgek8sr1j18o06ufk.jpg",
  );

  const texture_6 = useLoader(
    TextureLoader,
    "https://res.cloudinary.com/dq5exroyd/image/upload/v1704822315/lutmkkrqwvuurju9dl2x.jpg",
  );

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
