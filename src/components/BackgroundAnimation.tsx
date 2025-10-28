import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const geometricShapesRef = useRef<THREE.Mesh[]>([]);
  const particlesRef = useRef<THREE.Points | null>(null);
  const scrollYRef = useRef<number>(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a); // Dark background
    scene.fog = new THREE.Fog(0x0a0a0a, 10, 100);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap at 2 for performance
    canvasRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Monochromatic green/cyan color palette (terminal aesthetic)
    const terminalColors = [
      0x22c55e, // Green (your main terminal color)
      0x10b981, // Emerald
      0x06ffa5, // Cyan/mint
      0x14b8a6, // Teal
      0x0d9488, // Dark teal
    ];

    // Create geometric shapes
    const geometries = [
      new THREE.BoxGeometry(2, 2, 2),
      new THREE.TetrahedronGeometry(1.5),
      new THREE.OctahedronGeometry(1.5),
      new THREE.TorusGeometry(1.2, 0.4, 16, 100),
      new THREE.IcosahedronGeometry(1.5),
    ];

    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const color = terminalColors[Math.floor(Math.random() * terminalColors.length)];
      
      const material = new THREE.MeshPhongMaterial({
        color: color,
        wireframe: Math.random() > 0.5, // 50% wireframe
        transparent: true,
        opacity: 0.5, // Slightly more subtle
        emissive: color,
        emissiveIntensity: 0.15, // Reduced glow
      });

      const mesh = new THREE.Mesh(geometry, material);

      // Random position
      mesh.position.x = (Math.random() - 0.5) * 80;
      mesh.position.y = (Math.random() - 0.5) * 80;
      mesh.position.z = (Math.random() - 0.5) * 60 - 20;

      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      // Store random velocity for movement and parallax speed
      (mesh as any).velocity = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        rotation: (Math.random() - 0.5) * 0.02,
      };
      (mesh as any).parallaxSpeed = 0.5 + Math.random() * 1; // Different speeds for depth effect
      (mesh as any).initialY = mesh.position.y; // Store initial position

      scene.add(mesh);
      geometricShapesRef.current.push(mesh);
    }

    // Create particle system
    const particleCount = 1000;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 150;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 150;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 100;

      // Terminal green/cyan colors for particles
      const color = new THREE.Color(terminalColors[Math.floor(Math.random() * terminalColors.length)]);
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.3,
      vertexColors: true,
      transparent: true,
      opacity: 0.7, // Slightly more subtle
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Lighting - green/cyan theme
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x22c55e, 2, 100); // Green
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06ffa5, 2, 100); // Cyan
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Scroll event handler
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Calculate scroll progress (0 to 1)
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = maxScroll > 0 ? scrollYRef.current / maxScroll : 0;

      // Animate geometric shapes with scroll-responsive parallax
      geometricShapesRef.current.forEach((mesh) => {
        const velocity = (mesh as any).velocity;
        const parallaxSpeed = (mesh as any).parallaxSpeed;
        const initialY = (mesh as any).initialY;
        
        // Rotate shapes
        mesh.rotation.x += velocity.rotation;
        mesh.rotation.y += velocity.rotation;

        // Drift motion
        mesh.position.x += velocity.x;
        
        // Y position affected by scroll (parallax effect) - SLOWED DOWN
        mesh.position.y = initialY + velocity.y - (scrollProgress * 15 * parallaxSpeed);

        // Boundary check - wrap around
        if (Math.abs(mesh.position.x) > 50) mesh.position.x *= -1;
        
        // Wrap Y position based on scroll
        if (mesh.position.y < initialY - 100) mesh.position.y = initialY + 100;
      });

      // Animate particles - gentle floating + scroll effect
      if (particlesRef.current) {
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.01; // Floating effect
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true;

        // Rotation affected by scroll - SLOWED DOWN
        particlesRef.current.rotation.y = scrollProgress * Math.PI * 0.15 + Date.now() * 0.00005;
      }

      // Camera movement: subtle animation + scroll-responsive Y position - SLOWED DOWN
      const scrollY = scrollProgress * 8; // Move camera down as you scroll
      camera.position.x = Math.sin(Date.now() * 0.0001) * 2;
      camera.position.y = Math.cos(Date.now() * 0.0001) * 2 - scrollY;
      camera.lookAt(0, -scrollY, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
      
      // Dispose of geometries and materials
      geometricShapesRef.current.forEach((mesh) => {
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      });
      
      if (particlesRef.current) {
        particlesRef.current.geometry.dispose();
        (particlesRef.current.material as THREE.Material).dispose();
      }
      
      rendererRef.current?.dispose();
      
      if (canvasRef.current && rendererRef.current) {
        canvasRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};