/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, Stats } from "@react-three/drei";

function Model(props) {
   const { scene } = useGLTF("/belyash/belyash.gltf");
   return <primitive object={scene} {...props} />;
}

export default function App() {
   return (
      <Canvas
         dpr={[1, 2]}
         camera={{ fov: 45 }}
         style={{ position: "absolute", width: '100%', height: '100%', top: '0' }}
      >
         <color attach="background" args={["#a0a0a0"]} />
         <PresentationControls
            speed={1.5}
            global
            zoom={0.5}
            polar={[-0.1, Math.PI / 4]}
         >
            <Stage shadows="accumulative">
            <mesh castShadows />
               <Model scale={0.01} />
            </Stage>
            <Stats />
         </PresentationControls>
      </Canvas>
   );
}

//https://storage.yandexcloud.net/3ddesk/models/belyash.gltf
