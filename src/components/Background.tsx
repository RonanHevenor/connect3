"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// --- GLSL SHADER CODE ---
const fragmentShader = `
uniform float uTime;
uniform vec2 uResolution;

// 1. Helper function: 2D Rotation
mat2 rot(float a) {
    float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c);
}

// 2. Helper function: Noise (Standard Pseudo-random)
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

// 3. Helper function: Smooth Noise
float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

// 4. Fractal Brownian Motion (FBM) - Creates the "Cloud" look
float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 m = rot(0.5); // Rotate layers to make it swirl
    for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p = m * p * 2.0;
        a *= 0.5;
    }
    return v;
}

void main() {
    // Normalize coordinates
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    
    // Correct aspect ratio so noise doesn't stretch
    vec2 pos = uv;
    pos.x *= uResolution.x / uResolution.y;

    // --- MOVEMENT LOGIC ---
    // Move the noise over time
    float movement = uTime * 0.2;
    
    // Generate two noise layers for complexity
    float n1 = fbm(pos * 3.0 + vec2(0.0, -movement));
    float n2 = fbm(pos * 6.0 + vec2(movement, 0.0));
    
    // Combine noise to get a "smoke density" value
    float smoke = n1 * 0.5 + n2 * 0.5;
    
    // --- COLOR LOGIC (FOREST FIRE SUNSET) ---
    // Define Colors
    vec3 red = vec3(0.85, 0.1, 0.05);   // Deep Burnt Red
    vec3 yellow = vec3(1.0, 0.5, 0.0);  // Fiery Orange
    
    // Create the gradient from Left (0.0) to Right (1.0)
    // We add some noise to the mix factor so the colors "swirl" into each other
    float mixFactor = uv.x + (n1 * 0.2 - 0.1); 
    mixFactor = clamp(mixFactor, 0.0, 1.0);
    
    vec3 finalColor = mix(red, yellow, mixFactor);
    
    // --- MASKING ---
    // Make the smoke fade into black background
    // "pow" intensifies the contrast
    float opacity = smoothstep(0.3, 0.8, smoke);
    finalColor *= opacity * 1.2; // Boost brightness for fire glow

    gl_FragColor = vec4(finalColor, 1.0);
}
`;

const vertexShader = `
void main() {
    gl_Position = vec4(position, 1.0);
}
`;

const ShaderPlane = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mesh = useRef<THREE.Mesh>(null!);
  
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
    }),
    []
  );

  useFrame((state) => {
    if (mesh.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (mesh.current.material as any).uniforms.uTime.value = state.clock.getElapsedTime();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (mesh.current.material as any).uniforms.uResolution.value.set(
        window.innerWidth,
        window.innerHeight
      );
    }
  });

  return (
    <mesh ref={mesh} scale={[2, 2, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={false}
      />
    </mesh>
  );
};

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ShaderPlane />
      </Canvas>
    </div>
  );
}
