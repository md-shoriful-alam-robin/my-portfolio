'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Floating particle sphere — lightweight + atmospheric
function ParticleSphere() {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const count = 1400
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // Hollow sphere distribution
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi
      const r = 2.4 + Math.random() * 0.8
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.06
      ref.current.rotation.x += delta * 0.02
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00D4B8"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

// Inner glowing core
function GlowCore() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (ref.current) {
      ref.current.scale.setScalar(1 + 0.04 * Math.sin(state.clock.elapsedTime * 1.5))
    }
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color="#00D4B8"
        emissive="#00D4B8"
        emissiveIntensity={0.8}
        transparent
        opacity={0.15}
        wireframe
      />
    </mesh>
  )
}

// Orbit ring
function OrbitRing({ radius, speed, tilt }: { radius: number; speed: number; tilt: number }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed
  })
  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.004, 16, 120]} />
      <meshStandardMaterial color="#7C3AED" transparent opacity={0.25} />
    </mesh>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[4, 4, 4]} intensity={1} color="#00D4B8" />
      <pointLight position={[-4, -4, -4]} intensity={0.5} color="#7C3AED" />

      <ParticleSphere />
      <GlowCore />
      <OrbitRing radius={1.6} speed={0.4} tilt={Math.PI / 4} />
      <OrbitRing radius={2.1} speed={-0.25} tilt={Math.PI / 6} />
      <OrbitRing radius={2.6} speed={0.15} tilt={Math.PI / 2.5} />
    </Canvas>
  )
}
