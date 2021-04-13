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
               {/*    <div
                  style={{
                     height: "100vh",
                     backgroundColor: "red",
                  }}> */}
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 320">
                  <path
                     fill="#0099ff"
                     fillOpacity="1"
                     d="M0,64L60,101.3C120,139,240,213,360,224C480,235,600,181,720,138.7C840,96,960,64,1080,85.3C1200,107,1320,181,1380,218.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
               </svg>

               <div className="sigHolder">
                  <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                     <svg
                        width="271"
                        height="300"
                        viewBox="0 0 271 300"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                           id="signature"
                           d="M87.9225 103.338C83.3914 103.127 77.8424 100.521 73.8738 103.844C70.5909 106.592 70.3414 110.602 69.2377 114.465C68.5098 117.012 68.0807 121.329 68.7601 124.046C69.6159 127.469 78.2647 125.76 79.2123 122.838C80.6265 118.477 81.5985 114.864 81.8816 110.194C81.9305 109.387 82.8725 99.6397 82.8369 99.6575C81.7933 100.179 81.8291 105.472 81.3477 106.766C79.8681 110.743 80.3362 115.421 80.3362 119.579C80.3362 126.874 78.0248 140.258 89.0464 140.258C101.843 140.258 114.886 135.196 125.657 128.429C130.017 125.691 134.71 122.353 137.711 118.117C142.719 111.05 145.684 102.765 148.81 94.7685C153.556 82.6233 158.786 70.5741 162.634 58.1014C165.88 47.5759 166.829 36.532 168 25.6208C168.714 18.9657 168.486 12.0356 168.337 5.33443C168.13 -4.00752 159.644 9.02041 158.222 11.1787C153.305 18.6463 148.999 26.6686 147.63 35.5673C146.108 45.4545 147.096 56.0049 147.096 65.9968C147.096 74.2773 145.764 84.1841 148.22 92.2117C149.755 97.2327 154.92 100.705 159.683 102.214C169.147 105.213 180.344 104.999 190.141 104.209C208.842 102.701 219.968 85.3787 228.072 70.38C230.666 65.5795 232.447 60.4964 234.675 55.5445C234.716 55.4535 232.432 58.1181 231.95 59.1691C230.657 61.9849 230.545 63.8271 230.545 66.8959C230.545 68.8071 229.961 71.8379 230.657 73.6112C231.253 75.1269 233.896 75.2363 235.209 75.5218C241.062 76.794 247.85 76.0736 253.697 75.297C257.623 74.7756 261.57 73.628 265.33 72.3749C267.414 71.6803 270.251 69.4991 267.465 72.7963C260.336 81.2345 252.03 88.1482 243.357 94.9652C227.594 107.357 210.901 118.708 193.147 128.064C149.668 150.977 103.418 169.532 57.6897 187.406C41.098 193.891 24.7504 200.966 8.09774 207.299C6.14015 208.043 0.355797 210.052 2.45016 210.052"
                           stroke="black"
                           strokeWidth="3"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                  </Animator>
               </div>
            </ScrollPage>
         </Animated>

         <ScrollPage page={1}>
            <Animator animation={FadeUp}>
               <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
            </Animator>
         </ScrollPage>
         <ScrollPage page={2}>
            <Animator animation={ZoomInScrollOut}>
               <MaterialCard />
            </Animator>
         </ScrollPage>
      </ScrollContainer>
   );
}

export default Home;
