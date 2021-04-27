import Flip from "react-reveal/Flip";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
import Typist from "react-text-typist";
import { AnimateKeyframes } from "react-simple-animate";
import Animate from "animate.css-react";
import LightSpeed from "react-reveal/LightSpeed";
import { Animated } from "react-animated-css";
import ScrollAnimation from "react-animate-on-scroll";
import { motion } from "framer-motion";
import Zoom from "react-reveal/Zoom";
import myPic from "../assets/Me.jpg";
import { NavLink } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
import { Prompt } from "react-router";
import { useLayoutEffect, useState, useEffect, useRef } from "react";
import TrackVisibility from "react-on-screen";
import anime from "animejs/lib/anime.es.js";
import "../styles/App.css";

function App() {
   const [visible, setVisible] = useState(false);
   const animeImg = useRef(null);
   const onChange = (isVisible) => {
      setVisible(isVisible);
   };

   useEffect(() => {
      anime({
         targets: ".someth",
         translateX: {
            value: 250,
            duration: 800,
         },
         rotate: {
            value: 360,
            duration: 1800,
            easing: "easeInOutSine",
         },
         scale: {
            value: 2,
            duration: 1600,
            delay: 800,
            easing: "easeInOutQuart",
         },
         border: {
            borderRadius: ["50%"],
            duration: 1000,
         },
         delay: 250, // All properties except 'scale' inherit 250ms delay
      });
   }, []);
   return (
      <>
         <div
            style={{
               width: "100vw",
               top: "0",
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center",
               marginTop: "10vh",
            }}>
            <div className="pictureBox">
               <div>
                  <AnimateKeyframes
                     play="true"
                     duration={2}
                     fillMode="forwards"
                     keyframes={[
                        " transform: translateX(-1500px) ",
                        "transform: rotateY(0);",
                        "transform: rotateY(180deg)",
                     ]}>
                     <img
                        width="110px"
                        height="110px"
                        src={myPic}
                        style={{ borderRadius: "50%" }}
                     />
                  </AnimateKeyframes>
               </div>
            </div>

            <img className="someth" ref={animeImg} width="110px" height="110px" src={myPic} />
            <div className="titleholder">
               <VisibilitySensor onChange={onChange} offset={{ top: "150" }} scrollDelay={0}>
                  <Zoom fraction={0.5} opposite left cascade when={visible} duration={1500}>
                     <h1 className="myTypist">Some text</h1>
                  </Zoom>
               </VisibilitySensor>
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
            <LightSpeed left>
               <h1>React Reveal</h1>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
                  faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna
                  viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non
                  posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero,
                  vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat felis a
                  dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus
                  et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla
                  ac, tincidunt odio.
               </p>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
                  faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna
                  viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non
                  posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero,
                  vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat felis a
                  dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus
                  et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla
                  ac, tincidunt odio.
               </p>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
                  faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna
                  viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non
                  posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero,
                  vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat felis a
                  dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus
                  et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla
                  ac, tincidunt odio.
               </p>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
                  faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna
                  viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non
                  posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero,
                  vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat felis a
                  dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus
                  et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla
                  ac, tincidunt odio.
               </p>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
                  faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna
                  viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non
                  posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero,
                  vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat felis a
                  dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus
                  et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla
                  ac, tincidunt odio.
               </p>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
                  faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna
                  viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non
                  posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero,
                  vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat felis a
                  dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus
                  et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla
                  ac, tincidunt odio.
               </p>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
                  faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna
                  viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non
                  posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero,
                  vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat felis a
                  dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus
                  et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla
                  ac, tincidunt odio.
               </p>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
                  faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna
                  viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non
                  posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero,
                  vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat felis a
                  dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus
                  et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla
                  ac, tincidunt odio.
               </p>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
                  faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna
                  viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non
                  posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero,
                  vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat felis a
                  dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus
                  et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla
                  ac, tincidunt odio.
               </p>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
                  faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna
                  viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non
                  posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero,
                  vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat felis a
                  dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus
                  et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla
                  ac, tincidunt odio.
               </p>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit
                  faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna
                  viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non
                  posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero,
                  vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat felis a
                  dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus
                  et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla
                  ac, tincidunt odio.
               </p>
            </LightSpeed>
         </div>
      </>
   );
}

export default App;
