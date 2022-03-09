import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Canvas = () => {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg"),
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth * 0.75, window.innerHeight);
    renderer.render(scene, camera);
    camera.position.setZ(20);
    camera.position.setX(-3);

    const controls = new OrbitControls(camera, renderer.domElement);

    const loader = new THREE.TextureLoader();
    const saturnTexture = loader.load("saturn.jpg");
    const reactTexture = loader.load("react-logo.png");
    const htmlTexture = loader.load("html-logo.png");
    const cssTexture = loader.load("css-logo.png");
    const normalTexture = new THREE.TextureLoader().load("normal.jpg");

    const saturn = new THREE.Mesh(
      new THREE.SphereGeometry(3, 32, 32),
      new THREE.MeshStandardMaterial({
        map: saturnTexture,
        normalMap: normalTexture,
      })
    );

    const pivotPoint1 = new THREE.Object3D();
    const pivotPoint2 = new THREE.Object3D();
    saturn.add(pivotPoint1, pivotPoint2);

    const react = new THREE.Mesh(
      new THREE.SphereGeometry(2, 32, 32),
      new THREE.MeshStandardMaterial({
        map: reactTexture,
      })
    );
    react.rotation.y = 30;
    react.position.set(15, 0, 0);
    const html = new THREE.Mesh(
      new THREE.SphereGeometry(2, 32, 32),
      new THREE.MeshStandardMaterial({
        map: htmlTexture,
      })
    );
    html.position.set(-7, 0, -10);

    const css = new THREE.Mesh(
      new THREE.SphereGeometry(2, 32, 32),
      new THREE.MeshStandardMaterial({
        map: cssTexture,
      })
    );
    css.position.set(-5, 3, 9);

    scene.add(saturn);

    pivotPoint1.add(react, html);
    pivotPoint2.add(css);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    // const gridHelper = new THREE.GridHelper(200, 50);
    // scene.add(gridHelper);

    const backgroundTexture = new THREE.TextureLoader().load(
      "background-gradient.jpg"
    );
    scene.background = backgroundTexture;

    window.addEventListener("resize", onWindowResize, false);
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth * 0.75, window.innerHeight);
    }

    const orbitingSpheres = [react, html, css];
    function animate() {
      requestAnimationFrame(animate);
      saturn.rotation.y += 0.01;

      pivotPoint1.rotation.y += 0.005;
      pivotPoint2.rotation.y += 0.005;
      pivotPoint2.rotation.z += 0.01;

      let len = orbitingSpheres.length;
      while (len--) {
        const sphere = orbitingSpheres[len];
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.005;
        sphere.rotation.z += 0.01;
      }

      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  });

  return <canvas id="bg"></canvas>;
};

export default Canvas;
