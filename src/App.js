import logo from "./logo.svg";
import "./App.css";
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

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

function App() {
   return (
      <ScrollContainer>
         <ScrollPage page={0}>
            <Animator animation={MoveOut(0, -200)}>
               <span style={{ fontSize: "30px" }}>Let't me show you scroll animation 😀</span>
            </Animator>
         </ScrollPage>
         <ScrollPage page={1}>
            <Animator animation={ZoomInScrollOut}>
               <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span>
            </Animator>
         </ScrollPage>
      </ScrollContainer>
   );
}

export default App;
