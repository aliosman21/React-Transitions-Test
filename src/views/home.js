import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "../styles/home.css";

function Home() {
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
   return (
      <motion.div
         className="SomeClass"
         initial={{ scaleY: 0 }}
         animate={{ scaleY: 1 }}
         exit={{ scaleY: 0 }}
         transition={{ duration: 0.5 }}
         style={pageStyle}
         variants={pageVariants}>
         <NavLink to="/">Index</NavLink>
      </motion.div>
   );
}

export default Home;
