
import React, { useRef, Suspense } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import {useLoader } from 'react-three-fiber';
import Tarmac from '../textures/tarmac.jpeg'

const Grid = () => {

    const tarmac = useLoader(TextureLoader, Tarmac);
 

 

    return (
 
            <mesh rotation={[-Math.PI / 2, 0, 0]} 
            position={[0, -0.5, 0]} 
            receiveShadow
            >
           
                <planeBufferGeometry attach="geometry" args={[20, 20]} />
                
                     <meshBasicMaterial map={tarmac} attach="material"  />
                
               
        
        
       </mesh>

 
    )
}

export default Grid
