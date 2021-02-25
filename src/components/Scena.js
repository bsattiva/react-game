import React, {useRef, useEffect, useState} from 'react'
import {Canvas, useFrame, useThree } from 'react-three-fiber'
import * as THREE from "three";

const Scena = () => {
    var [dir, setDir] = useState(new THREE.Vector3(1, 2, 3));
    var [direction, setDirection] = useState(null);
   // var dir = new THREE.Vector3(1, 2, 3);
    var [position, setPosition] = useState([0, 0, 5]);

    var [distance, setDistance] = useState(5);

    var [speed, setSpeed] = useState(0);

    var [aspect, setAspect] = useState(0);

    const style = {
        width: '100%',
        height: '900px'
    }

    const keyup = () => {
     
        setAspect(0);
        setSpeed(0);
        
        setPosition(position);

    
        setDir(dir);
        console.log("FINAL POSITION: " + dir.y);
    }
    
    const keydown = (event) => {


  
            console.log("STARTING: " + dir.y)
 
        
        let key = event.key;
        if (key === 'ArrowUp') {
            
         //   setDistance(distance -0.1)
       setSpeed(0.1);
        } else if (key === 'ArrowRight') {
            setAspect(1);
        } else if (key === 'ArrowLeft') {
            setAspect(-1);
        } else if (key === 'ArrowDown') {
            setSpeed(-0.1);
        }
        console.log(position);
     
    }
    const ref = useRef(null);
    useEffect(() => {
        // const canvas = ref.current;
        // const context = canvas.getContext('3d');
        
    }, [keydown])


    function Box() {
        return (
          <mesh>
            <boxBufferGeometry />
            <meshNormalMaterial />
          </mesh>
        )
      }




    const Camera = (props) => {
      const ref = useRef()
      const { setDefaultCamera } = useThree()
     
     useEffect(() => void setDefaultCamera(ref.current), [])

  //   useEffect(() => {setPosition(ref.current.position)}, [speed])
  
     
      useFrame(() => {
       
        if (ref.current)  {
//console.log("BEFORE:" + ref.current.rotation.x);
            if (aspect > 0) {
                ref.current.rotation.y += Math.PI / 242;
            
 
              
            } else if (aspect < 0) {
                ref.current.rotation.y -= Math.PI / 242;
             
    
            } 


            ref.current.getWorldDirection( dir );

            ref.current.position.addScaledVector( dir, speed );
 
            position = ref.current.position;
 
         //   ref.current.updateMatrixWorld()
        }
        
    }
          
          )
      return <perspectiveCamera ref={ref} {...props} />
    }
    

    return (
        <>
            <Canvas style={style} tabIndex="0" onKeyDown={keydown} onKeyUp={keyup}>
                <Camera position={position} />
                <Box />
            </Canvas>
        </>
    )
}

export default Scena
