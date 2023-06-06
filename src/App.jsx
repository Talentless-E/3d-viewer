/* eslint-disable no-unused-vars */
import { useEffect } from 'react';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import SceneInit from './lib/Sceneinit';

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    let loadedModel;
    const glftLoader = new GLTFLoader();
    glftLoader.load(`https://storage.yandexcloud.net/3ddesk/models/husky.gltf`, (gltfScene) => {
      loadedModel = gltfScene;

      // gltfScene.scene.rotation.y = Math.PI / 8;
      gltfScene.scene.position.y = -5;
      gltfScene.scene.scale.set(80, 80, 80);
      test.scene.add(gltfScene.scene);
    });

    // const animate = () => {
    //   if (loadedModel) {
    //     loadedModel.scene.rotation.x += 0.01;
    //     loadedModel.scene.rotation.y += 0.01;
    //     loadedModel.scene.rotation.z += 0.01;
    //   }
    //   requestAnimationFrame(animate);
    // };
    // animate();
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;