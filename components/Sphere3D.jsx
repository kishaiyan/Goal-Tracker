// components/Sphere3D.jsx
"use client"
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Sphere3D({ position = 'right', size = 300, color = '#4338ca' }) {
  const mountRef = useRef(null);
  
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;
    
    // Create a renderer with transparent background
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(size, size);
    
    // Only append the renderer if the ref exists and doesn't already have a child
    if (mountRef.current && !mountRef.current.hasChildNodes()) {
      mountRef.current.appendChild(renderer.domElement);
    }
    
    // Create sphere geometry
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    
    // Create wireframe material
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    
    // Create sphere mesh
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    
    // Add animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      sphere.rotation.x += 0.003;
      sphere.rotation.y += 0.005;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, [size, color]);
  
  // Determine position classes
  let positionClasses = '';
  
  switch (position) {
    case 'left':
      positionClasses = 'left-0 -translate-x-1/2';
      break;
    case 'right':
      positionClasses = 'right-0 translate-x-1/2';
      break;
    case 'top':
      positionClasses = 'top-0 -translate-y-1/2';
      break;
    case 'bottom':
      positionClasses = 'bottom-0 translate-y-1/2';
      break;
    default:
      positionClasses = 'right-0 translate-x-1/2';
  }
  
  return (
    <div 
      ref={mountRef} 
      className={`absolute ${positionClasses} z-0 opacity-70 pointer-events-none`}
      style={{ width: size, height: size }}
    />
  );
}