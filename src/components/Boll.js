import React, {useRef, useState, useEffect} from 'react'
import { useFrame } from 'react-three-fiber'

const Boll = (props) => {
     const ref = useRef()
     const speed = 0.1;
     const [position, setPosition] = useState(props.position);
     const [shoot, setShoot] = useState(props.visible);
    const [visible, set] = useState(props.visible)
     useEffect(() => {
        if (ref.current)
         void ref.current.lookAt(props.dir)
     }, [props.dir])
     
    useFrame(() => {
        if (ref.current) {
            ref.current.position.addScaledVector(props.dir, speed);
            
        }
        
    })

    
 //   useEffect(() => void set(props.visible), [])
  //  useEffect(() =>  setInterval(() => set(visible => !visible), 700), []) 
    useEffect(() => void setPosition(props.pos))

    return (
        
        <group>
        {props.visible && (
        <mesh position={[position.x, position.y, position.z]} ref={ref} >
            <sphereGeometry  attach="geometry" args={[0.02, 32, 32]}/>
            <meshBasicMaterial color="#E5FFCC" attach="material" />
        </mesh>
        )}
        </group>
    )
}

export default Boll
