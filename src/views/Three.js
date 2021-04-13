import ReactDOM from "react-dom";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
   Animator,
   ScrollContainer,
   ScrollPage,
   batch,
   Fade,
   FadeIn,
   Move,
   MoveIn,
   MoveOut,
   Sticky,
   StickyIn,
   ZoomIn,
} from "react-scroll-motion";
import { Animated } from "react-animated-css";
import { PointsMaterial } from "three";

function Box(props) {
   // This reference will give us direct access to the mesh
   const mesh = useRef();

   useFrame(() => {
      mesh.current.rotation.y += 0.01;
   });
   return (
      <points {...props} ref={mesh}>
         <torusGeometry args={[1, 1, 16, 100]} />
         <pointsMaterial size={0.005} />
      </points>
   );
}
export default function Three() {
   const FadeUp = batch(Fade(), Move(), Sticky());
   return (
      <ScrollContainer>
         <ScrollPage page={0}>
            <div style={{ height: "200%" }}>
               <Canvas style={{ width: "100%", height: "100%", backgroundColor: "black" }}>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <pointLight position={[-10, -10, -10]} />
                  <Box position={[0, 1, 0]} />
               </Canvas>
            </div>
         </ScrollPage>

         <ScrollPage page={1}>
            <Animator animation={FadeUp}>
               <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
            </Animator>
         </ScrollPage>
      </ScrollContainer>
   );
}
