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
import { useLayoutEffect, useState, useEffect } from "react";
import TrackVisibility from "react-on-screen";
import "../styles/App.css";

function App() {
   const [visible, setVisible] = useState(false);
   const onChange = (isVisible) => {
      setVisible(isVisible);
   };
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
