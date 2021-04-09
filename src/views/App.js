import Flip from "react-reveal/Flip";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
import Typist from "react-text-typist";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { motion } from "framer-motion";
import myPic from "../assets/Me.jpg";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/App.css";

function App() {
   return (
      <>
         <div className="fullAppPage">
            <div className="pictureBox">
               <div>
                  <AnimateKeyframes
                     play="true"
                     duration={2}
                     fillMode="forwards"
                     keyframes={["transform: rotateY(0) ", "transform: rotateY(180deg)"]}>
                     <img
                        width="110px"
                        height="110px"
                        src={myPic}
                        style={{ borderRadius: "50%" }}
                     />
                  </AnimateKeyframes>
               </div>
            </div>
            <div className="titleholder">
               <ScrollAnimation animateIn="animate__zoomInDown" duration="2">
                  <h1>Software Engineer</h1>
               </ScrollAnimation>
            </div>

            <div className="typistHolderDiv">
               <Typist
                  className={"myTypist"}
                  typingSpeed="100"
                  pauseTime="3000"
                  sentences={[
                     "Welcome to my website",
                     "Hope you enjoy your look around",
                     "Some weird stuff lies around here",
                  ]}
                  loop={false}
               />
            </div>
         </div>
      </>
   );
}

export default App;
