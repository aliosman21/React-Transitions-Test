import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Animated } from "react-animated-css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Card, Icon, Image } from "semantic-ui-react";
import myPic from "../assets/Me.jpg";
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

/*   <Card>
       <Image src={myPic} wrapped ui={false} />
       <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
             <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
       </Card.Content>
       <Card.Content extra>
          <a>
             <Icon name="user" />
             22 Friends
          </a>
       </Card.Content>
    </Card>; */
function Home() {
   const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
   const FadeUp = batch(Fade(), Move(), Sticky());
   return (
      <ScrollContainer>
         <Animated animationIn="flipInY" animationOut="fadeOut" isVisible={true}>
            <ScrollPage page={0}>
               <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                  <span style={{ fontSize: "30px" }}>Let't me show you scroll animation 😀</span>
               </Animator>
            </ScrollPage>
         </Animated>
         <ScrollPage page={1}>
            <Animator animation={ZoomInScrollOut}>
               <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span>
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
