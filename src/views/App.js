import Flip from "react-reveal/Flip";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
import Typist from "react-text-typist";
import { Animate } from "react-simple-animate";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import "../styles/App.css";
const pageVariants = {
   initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8,
   },
   in: {
      opacity: 1,
      x: 0,
      scale: 1,
   },
   out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2,
   },
};

const pageTransition = {
   type: "tween",
   ease: "anticipate",
   duration: 0.5,
};

const pageStyle = {
   position: "absolute",
};
function App() {
   return (
      <>
         <motion.div
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}>
            <NavLink to="/home">HOME</NavLink>

            <div>
               <Flip left>
                  <h1>React Reveal</h1>
               </Flip>
            </div>
            {/*  <Roll top cascade>

                  <div className="somebox">hello</div>
               </Roll> */}
            <Animate
               play="true" // Toggle when animation should start
               duration={1}
               start={{
                  transform: "translateX(0) ",
                  opacity: 0,
               }}
               end={{
                  transform: "translateX(160px) ",
                  opacity: 1,
               }}>
               <div className="somebox"></div>
            </Animate>
            <div className="textHolder">
               <Fade bottom>
                  <Typist
                     className={"myTypist"}
                     sentences={["First Sentence", "Second Sentence", "Third Sentence"]}
                     loop={true}
                  />
               </Fade>
            </div>
         </motion.div>
      </>
   );
}

export default App;
