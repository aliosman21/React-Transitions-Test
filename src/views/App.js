import Flip from "react-reveal/Flip";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
import Typist from "react-text-typist";
import { Animate } from "react-simple-animate";
import "../styles/App.css";

function App() {
   return (
      <>
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
      </>
   );
}

export default App;
