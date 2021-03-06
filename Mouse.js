/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/mouse.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.07, -0.04]} scale={[1, 0.6, 1]}>
        <mesh geometry={nodes.Cube_1.geometry} material={materials.scrol_whell} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials.upr_part} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials.lower_part} />
      </group>
    </group>
  )
}

useGLTF.preload('/mouse.gltf')
