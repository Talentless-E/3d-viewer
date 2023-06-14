/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/belyash/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.MI_Belyash_Body} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.MI_Belyash_Head} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.M_Emiss_Inst} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
