import Flip from "react-reveal/Flip";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
import Typist from "react-text-typist";
import "../styles/App.css";

function App() {
   return (
      <>
         <div>
            <Flip left>
               <h1>React Reveal</h1>
            </Flip>
         </div>
         <div>
            <h1>
               <Roll top cascade>
                  React Reveal
               </Roll>
            </h1>
         </div>
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
