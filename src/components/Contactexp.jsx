import { Text3D, Html } from "@react-three/drei";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import * as THREE from "three";
import { useEffect, useRef, Suspense, useMemo } from "react";

function WaveModel(props) {
  const fbx = useMemo(() => useLoader(FBXLoader, "/models/Waving.fbx"), []);
  const mixer = useRef(null);

  useEffect(() => {
    const defaultMat = new THREE.MeshStandardMaterial({ color: "#7a28ff" });

    fbx.traverse((child) => {
      if (child.isMesh) child.material = defaultMat;
    });

    if (fbx.animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(fbx);
      const action = mixer.current.clipAction(fbx.animations[0]);
      action.play();
    }
  }, [fbx]);

  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });

  return <primitive object={fbx} {...props} />;
}

const Contactexp = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      {/* Lights optimized */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />

      <group>
        <Text3D
          position={[-3, -3, -2]}
          curveSegments={24}
          bevelEnabled
          bevelSize={0.03}
          bevelThickness={0.08}
          height={0.4}
          letterSpacing={-0.05}
          size={1.8}
          font="/fonts/Inter_Bold.json"
        >
          {`Hello`}
          <meshNormalMaterial />
        </Text3D>

        {/* Smooth Suspense Loading */}
        <Suspense fallback={<Html center>Loading Model...</Html>}>
          <WaveModel scale={0.03} position={[0, -3, 0]} />
        </Suspense>
      </group>
    </Canvas>
  );
};

export default Contactexp;
