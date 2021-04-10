import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Animated } from "react-animated-css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Card, Icon, Image } from "semantic-ui-react";
import myPic from "../assets/Me.jpg";
import MaterialCard from "../Components/MaterialCard";
import "semantic-ui-css/semantic.min.css";
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
import "../styles/home.css";

function Home() {
   const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
   const FadeUp = batch(Fade(), Move(), Sticky());
   return (
      <ScrollContainer>
         <Animated animationIn="flipInY" animationOut="fadeOut" isVisible={true}>
            <ScrollPage page={0}>
               <div
                  style={{
                     height: "100vh",
                     backgroundColor: "red",
                  }}>
                  <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                     {/* <span
                     style={{
                        fontSize: "30px",
                     }}>
                     Let't me show you scroll animation 😀
                  </span> */}
                  </Animator>
               </div>
            </ScrollPage>
         </Animated>
         <ScrollPage page={1}>
            <Animator animation={ZoomInScrollOut}>
               {/*  <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span> */}
               <MaterialCard />
            </Animator>
         </ScrollPage>
         <ScrollPage page={2}>
            <Animator animation={FadeUp}>
               <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
            </Animator>
         </ScrollPage>
      </ScrollContainer>
   );
}

export default Home;
