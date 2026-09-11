"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // =========================================================
    // SCENE
    // =========================================================

    const scene = new THREE.Scene();

    // =========================================================
    // CAMERA
    // =========================================================

    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );

    camera.position.set(0, 0.15, 8);

    // =========================================================
    // RENDERER
    // =========================================================

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    container.appendChild(renderer.domElement);

    // =========================================================
    // LIGHTING
    // =========================================================

    const ambientLight = new THREE.AmbientLight(
      0x8a7cff,
      1.8
    );

    scene.add(ambientLight);

    const pinkLight = new THREE.PointLight(
      0xff28d7,
      35,
      12
    );

    pinkLight.position.set(3, 2.5, 4);

    scene.add(pinkLight);

    const blueLight = new THREE.PointLight(
      0x287bff,
      30,
      12
    );

    blueLight.position.set(-3, 1.5, 3);

    scene.add(blueLight);

    const whiteLight = new THREE.PointLight(
      0xffffff,
      15,
      8
    );

    whiteLight.position.set(0, 4, 3);

    scene.add(whiteLight);

    // =========================================================
    // MAIN CRYSTAL GEOMETRY
    // =========================================================

    function createCrystalGeometry() {
      const sides = 8;

      const vertices: number[] = [];
      const indices: number[] = [];

      const rings = [
        {
          y: 1.75,
          radius: 0,
        },
        {
          y: 1.05,
          radius: 0.52,
        },
        {
          y: 0.15,
          radius: 0.82,
        },
        {
          y: -0.65,
          radius: 0.68,
        },
        {
          y: -1.45,
          radius: 0.28,
        },
        {
          y: -1.75,
          radius: 0,
        },
      ];

      rings.forEach((ring, ringIndex) => {
        if (ring.radius === 0) {
          vertices.push(0, ring.y, 0);
          return;
        }

        for (let i = 0; i < sides; i++) {
          const angle =
            (i / sides) * Math.PI * 2 +
            Math.PI / 8;

          const radius =
            ring.radius *
            (1 +
              Math.sin(i * 3.7 + ringIndex) * 0.045);

          vertices.push(
            Math.cos(angle) * radius,
            ring.y,
            Math.sin(angle) * radius
          );
        }
      });

      // Top point -> first ring
      for (let i = 0; i < sides; i++) {
        const next = (i + 1) % sides;

        indices.push(
          0,
          1 + i,
          1 + next
        );
      }

      // Middle rings
      for (let r = 1; r < 4; r++) {
        const currentStart =
          1 + (r - 1) * sides;

        const nextStart =
          currentStart + sides;

        for (let i = 0; i < sides; i++) {
          const next = (i + 1) % sides;

          indices.push(
            currentStart + i,
            nextStart + i,
            nextStart + next
          );

          indices.push(
            currentStart + i,
            nextStart + next,
            currentStart + next
          );
        }
      }

      // Bottom point
      const bottomPoint =
        vertices.length / 3 - 1;

      const lastRingStart =
        bottomPoint - sides;

      for (let i = 0; i < sides; i++) {
        const next = (i + 1) % sides;

        indices.push(
          lastRingStart + i,
          bottomPoint,
          lastRingStart + next
        );
      }

      const geometry =
        new THREE.BufferGeometry();

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(
          vertices,
          3
        )
      );

      geometry.setIndex(indices);

      geometry.computeVertexNormals();

      return geometry;
    }

    // =========================================================
    // MAIN CRYSTAL
    // =========================================================

    const crystalGeometry =
      createCrystalGeometry();

    const crystalMaterial =
      new THREE.MeshPhysicalMaterial({
        color: 0x9b5cff,

        metalness: 0.05,

        roughness: 0.05,

        transmission: 0.55,

        thickness: 2,

        transparent: true,

        opacity: 0.88,

        clearcoat: 1,

        clearcoatRoughness: 0.08,

        emissive: 0x321060,

        emissiveIntensity: 0.9,
      });

    const crystal =
      new THREE.Mesh(
        crystalGeometry,
        crystalMaterial
      );

    crystal.position.set(
      0,
      0.05,
      0
    );

    crystal.rotation.y = 1;

    crystal.scale.set(
      0.8,
      0.85,
      0.8
    );

    scene.add(crystal);

    // =========================================================
    // CRYSTAL EDGE WIREFRAME
    // =========================================================

    const crystalEdges =
      new THREE.EdgesGeometry(
        crystalGeometry
      );

    const crystalEdgeMaterial =
      new THREE.LineBasicMaterial({
        color: 0xff67e8,
        transparent: true,
        opacity: 0.88,
      });

    const crystalOutline =
      new THREE.LineSegments(
        crystalEdges,
        crystalEdgeMaterial
      );

    crystalOutline.position.copy(
      crystal.position
    );

    crystalOutline.rotation.copy(
      crystal.rotation
    );

    crystalOutline.scale.copy(
      crystal.scale
    );

    scene.add(crystalOutline);

    // =========================================================
    // INNER CRYSTAL GLOW
    // =========================================================

    const glowGeometry =
      new THREE.SphereGeometry(
        0.72,
        32,
        32
      );

    const glowMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x7c35ff,
        transparent: true,
        opacity: 0.12,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

    const glow =
      new THREE.Mesh(
        glowGeometry,
        glowMaterial
      );

    glow.scale.set(
      0.7,
      1.45,
      0.7
    );

    glow.position.y = 0.05;

    scene.add(glow);

    // =========================================================
    // SMALL CRYSTALS
    // =========================================================

    const smallCrystals: THREE.Mesh[] = [];

    const crystalPositions = [
      [-2.15, 1.55, 0.1, 0.24],
      [2.2, 1.35, 0.1, 0.22],
      [-2.45, -1.0, 0.1, 0.18],
      [2.4, -1.2, 0.1, 0.23],
      [0.1, 2.25, -0.3, 0.2],
      [0.1, -2.2, -0.2, 0.22],
      [-1.15, 2.0, -0.4, 0.12],
      [1.3, -1.9, -0.4, 0.14],
    ];

    crystalPositions.forEach(
      ([x, y, z, size], index) => {
        const geometry =
          new THREE.OctahedronGeometry(
            size,
            0
          );

        const material =
          new THREE.MeshPhysicalMaterial({
            color:
              index % 2 === 0
                ? 0x9b5cff
                : 0xff4fd8,

            metalness: 0.1,

            roughness: 0.04,

            transmission: 0.5,

            transparent: true,

            opacity: 0.6,

            emissive:
              index % 2 === 0
                ? 0x301060
                : 0x501044,

            emissiveIntensity: 0.4,
          });

        const small =
          new THREE.Mesh(
            geometry,
            material
          );

        small.position.set(
          x,
          y,
          z
        );

        small.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );

        scene.add(small);

        smallCrystals.push(small);
      }
    );

    // =========================================================
    // ORBIT RINGS
    // =========================================================

    const orbitGroup =
      new THREE.Group();

    scene.add(orbitGroup);

    function createOrbit(
      radius: number,
      tube: number,
      color: number,
      rotation: THREE.Euler
    ) {
      const geometry =
        new THREE.TorusGeometry(
          radius,
          tube,
          12,
          160
        );

      const material =
        new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.65,
          blending:
            THREE.AdditiveBlending,
        });

      const ring =
        new THREE.Mesh(
          geometry,
          material
        );

      ring.rotation.copy(
        rotation
      );

      orbitGroup.add(ring);

      return ring;
    }

    const orbit1 = createOrbit(
      2.15,
      0.012,
      0xff35dd,
      new THREE.Euler(
        THREE.MathUtils.degToRad(66),
        0,
        0
      )
    );

    const orbit2 = createOrbit(
      2.2,
      0.009,
      0x398cff,
      new THREE.Euler(
        THREE.MathUtils.degToRad(104),
        0,
        THREE.MathUtils.degToRad(25)
      )
    );

    const orbit3 = createOrbit(
      2.05,
      0.006,
      0xb34dff,
      new THREE.Euler(
        THREE.MathUtils.degToRad(82),
        THREE.MathUtils.degToRad(20),
        THREE.MathUtils.degToRad(65)
      )
    );

    // =========================================================
    // TECHNOLOGY CARDS
    // =========================================================

    const techCards: THREE.Group[] = [];

    const technologies = [
      
      
      {
        text: "React",
        color: "#F7DF1E",
      },  {
        text: "HTML",
        color: "#61DAFB",
      },
      {
        text: "JS",
        color: "#F7DF1E",
      },
      
      {
        text: "Nodejs",
        color: "#47A248",
      },
      {
        text: "CSS",
        color: "#FFFFFF",
      },
      {
        text: "</>",
        color: "#FF4FD8",
      },
      {
        text: "UI",
        color: "#FFFFFF",
      },
      {
        text: "CSS",
        color: "#FFFFFF",
      },
    ];

    function createTechTexture(
      text: string,
      color: string
    ) {
      const canvas =
        document.createElement(
          "canvas"
        );

      canvas.width = 512;
      canvas.height = 512;

      const ctx =
        canvas.getContext("2d");

      if (!ctx) return null;

      ctx.clearRect(
        0,
        0,
        512,
        512
      );

      // Outer glow
      ctx.shadowColor = color;
      ctx.shadowBlur = 35;

      // Glass background
      ctx.fillStyle =
        "rgba(25, 20, 55, 0.72)";

      ctx.beginPath();

      ctx.roundRect(
        55,
        55,
        402,
        402,
        55
      );

      ctx.fill();

      // Border
      ctx.shadowBlur = 25;

      ctx.strokeStyle = color;

      ctx.lineWidth = 8;

      ctx.stroke();

      // Inner glass
      ctx.shadowBlur = 0;

      ctx.strokeStyle =
        "rgba(255,255,255,0.3)";

      ctx.lineWidth = 3;

      ctx.stroke();

      // Text
      ctx.shadowColor = color;

      ctx.shadowBlur = 20;

      ctx.fillStyle = color;

      ctx.font =
        text.length > 2
          ? "bold 85px Arial"
          : "bold 130px Arial";

      ctx.textAlign = "center";

      ctx.textBaseline = "middle";

      ctx.fillText(
        text,
        256,
        256
      );

      const texture =
        new THREE.CanvasTexture(
          canvas
        );

      texture.colorSpace =
        THREE.SRGBColorSpace;

      return texture;
    }

    technologies.forEach(
      (tech, index) => {
        const texture =
          createTechTexture(
            tech.text,
            tech.color
          );

        if (!texture) return;

        const group =
          new THREE.Group();

        const geometry =
          new THREE.BoxGeometry(
            0.68,
            0.68,
            0.14
          );

        const material =
          new THREE.MeshPhysicalMaterial({
            map: texture,

            transparent: true,

            opacity: 0.95,

            metalness: 0.15,

            roughness: 0.12,

            transmission: 0.15,

            clearcoat: 1,

            clearcoatRoughness: 0.08,
          });

        const card =
          new THREE.Mesh(
            geometry,
            material
          );

        group.add(card

        );

        // Glowing edges
        const edges =
          new THREE.EdgesGeometry(
            geometry
          );

        const edgeMaterial =
          new THREE.LineBasicMaterial({
            color:
              tech.color,
            transparent: true,
            opacity: 0.65,
          });

        const edge =
          new THREE.LineSegments(
            edges,
            edgeMaterial
          );

        group.add(edge);

        const angle =
          (index /
            technologies.length) *
          Math.PI *
          2;

        group.userData.angle =
          angle;

        group.userData.radius =
          2.25;

        group.userData.index =
          index;

        scene.add(group);

        techCards.push(group);
      }
    );

    // =========================================================
    // PARTICLES
    // =========================================================

    const particleCount = 220;

    const particlePositions =
      new Float32Array(
        particleCount * 3
      );

    for (
      let i = 0;
      i < particleCount;
      i++
    ) {
      const radius =
        2.5 +
        Math.random() * 2.3;

      const angle =
        Math.random() *
        Math.PI *
        2;

      particlePositions[
        i * 3
      ] =
        Math.cos(angle) *
        radius;

      particlePositions[
        i * 3 + 1
      ] =
        (Math.random() - 0.5) *
        5;

      particlePositions[
        i * 3 + 2
      ] =
        (Math.random() - 0.5) *
        2.5;
    }

    const particleGeometry =
      new THREE.BufferGeometry();

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        particlePositions,
        3
      )
    );

    const particleMaterial =
      new THREE.PointsMaterial({
        color: 0xc46cff,
        size: 0.025,
        transparent: true,
        opacity: 0.75,
        blending:
          THREE.AdditiveBlending,
        depthWrite: false,
      });

    const particles =
      new THREE.Points(
        particleGeometry,
        particleMaterial
      );

    scene.add(particles);

    // =========================================================
    // FLOOR GLOW
    // =========================================================

    const floorRingGeometry =
      new THREE.RingGeometry(
        1.0,
        1.8,
        96
      );

    const floorRingMaterial =
      new THREE.MeshBasicMaterial({
        color: 0x9b3cff,
        transparent: true,
        opacity: 0.22,
        side: THREE.DoubleSide,
        blending:
          THREE.AdditiveBlending,
      });

    const floorRing =
      new THREE.Mesh(
        floorRingGeometry,
        floorRingMaterial
      );

    floorRing.rotation.x =
      -Math.PI / 2;

    floorRing.position.y =
      -2.0;

    scene.add(floorRing);

    const floorRing2 =
      floorRing.clone();

    floorRing2.scale.set(
      1.35,
      1.35,
      1.35
    );

    floorRing2.material =
      floorRingMaterial.clone();

    (
      floorRing2.material as THREE.MeshBasicMaterial
    ).opacity = 0.1;

    floorRing2.position.y =
      -2.02;

    scene.add(floorRing2);

    // =========================================================
    // FLOOR LIGHT
    // =========================================================

    const floorLight =
      new THREE.PointLight(
        0xb12cff,
        22,
        5
      );

    floorLight.position.set(
      0,
      -1.75,
      0
    );

    scene.add(floorLight);

    // =========================================================
    // MOUSE
    // =========================================================

    const mouse = {
      x: 0,
      y: 0,
    };

    const targetMouse = {
      x: 0,
      y: 0,
    };

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      const rect =
        container.getBoundingClientRect();

      targetMouse.x =
        ((event.clientX -
          rect.left) /
          rect.width) *
          2 -
        1;

      targetMouse.y =
        -(
          ((event.clientY -
            rect.top) /
            rect.height) *
            2 -
          1
        );
    };

    container.addEventListener(
      "mousemove",
      handleMouseMove
    );

    // =========================================================
    // ANIMATION
    // =========================================================

    const clock =
      new THREE.Clock();

    let animationFrame = 0;

    const animate = () => {
      animationFrame =
        requestAnimationFrame(
          animate
        );

      const elapsed =
        clock.getElapsedTime();

      // Smooth mouse
      mouse.x +=
        (targetMouse.x -
          mouse.x) *
        0.10;

      mouse.y +=
        (targetMouse.y -
          mouse.y) *
        0.10;

      // Main crystal
      crystal.rotation.y =
        elapsed * 0.32 +
        mouse.x * 0.2;

      crystal.rotation.x =
        Math.sin(
          elapsed * 0.5
        ) *
          0.08 +
        mouse.y * 0.12;

      // Crystal outline
      crystalOutline.rotation.copy(
        crystal.rotation
      );

      // Glow
      glow.scale.y =
        1.45 +
        Math.sin(
          elapsed * 2
        ) *
          0.05;

      glow.material.opacity =
        0.1 +
        Math.sin(
          elapsed * 2
        ) *
          0.025;

      // Small crystals
      smallCrystals.forEach(
        (small, index) => {
          small.rotation.x +=
            0.003 +
            index * 0.0002;

          small.rotation.y +=
            0.006 +
            index * 0.0003;

          small.position.y +=
            Math.sin(
              elapsed * 1.2 +
                index
            ) *
            0.0007;
        }
      );

      // Orbit rings
      orbit1.rotation.z =
        elapsed * 0.14;

      orbit2.rotation.z =
        -elapsed * 0.1;

      orbit3.rotation.y =
        elapsed * 0.12;

      orbitGroup.rotation.x =
        mouse.y * 0.08;

      orbitGroup.rotation.y =
        mouse.x * 0.08;

      // Technology cards
      techCards.forEach(
        (group, index) => {
          const baseAngle =
            group.userData.angle;

          const angle =
            baseAngle +
            elapsed *
              (0.12 +
                index * 0.008);

          const radius =
            group.userData.radius;

          group.position.x =
            Math.cos(angle) *
            radius;

          group.position.y =
            Math.sin(angle) *
            1.5;

          group.position.z =
            Math.sin(angle) *
            0.8;

          group.rotation.x =
            mouse.y * 0.2;

          group.rotation.y =
            mouse.x * 0.2;

          group.rotation.z =
            Math.sin(
              elapsed * 1.2 +
                index
            ) *
            0.08;
        }
      );

      // Particles
      particles.rotation.y =
        elapsed * 0.015;

      particles.rotation.x =
        mouse.y * 0.04;

      // Floor
      floorRing.rotation.z =
        elapsed * 0.12;

      floorRing2.rotation.z =
        -elapsed * 0.08;

      // Camera mouse movement
      camera.position.x +=
        (mouse.x * 0.25 -
          camera.position.x) *
        0.03;

      camera.position.y +=
        (mouse.y * 0.18 +
          0.15 -
          camera.position.y) *
        0.03;

      camera.lookAt(
        0,
        0,
        0
      );

      renderer.render(
        scene,
        camera
      );
    };

    animate();

    // =========================================================
    // RESPONSIVE
    // =========================================================

    const handleResize = () => {
      const width =
        container.clientWidth;

      const height =
        container.clientHeight;

      camera.aspect =
        width / height;

      camera.updateProjectionMatrix();

      renderer.setSize(
        width,
        height
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    // =========================================================
    // CLEANUP
    // =========================================================

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      container.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      crystalGeometry.dispose();
      crystalMaterial.dispose();

      crystalEdges.dispose();
      crystalEdgeMaterial.dispose();

      glowGeometry.dispose();
      glowMaterial.dispose();

      smallCrystals.forEach(
        (small) => {
          small.geometry.dispose();

          const material =
            small.material as THREE.MeshPhysicalMaterial;

          material.dispose();
        }
      );

      orbitGroup.children.forEach(
        (child) => {
          const mesh =
            child as THREE.Mesh;

          mesh.geometry.dispose();

          const material =
            mesh.material as THREE.Material;

          material.dispose();
        }
      );

      techCards.forEach(
        (group) => {
          group.children.forEach(
            (child) => {
              const mesh =
                child as THREE.Mesh;

              mesh.geometry.dispose();

              const material =
                mesh.material as THREE.MeshPhysicalMaterial;

              if (material.map) {
                material.map.dispose();
              }

              material.dispose();
            }
          );
        }
      );

      particleGeometry.dispose();
      particleMaterial.dispose();

      floorRingGeometry.dispose();
      floorRingMaterial.dispose();

      renderer.dispose();

      if (
        container.contains(
          renderer.domElement
        )
      ) {
        container.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[420px] w-full sm:h-[500px]"
    />
  );
}