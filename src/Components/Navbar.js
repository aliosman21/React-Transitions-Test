import React, { Component } from "react";
import {
   MDBNavbar,
   MDBNavbarBrand,
   MDBNavbarNav,
   MDBNavItem,
   MDBNavLink,
   MDBNavbarToggler,
   MDBCollapse,
   MDBFormInline,
   MDBDropdown,
   MDBDropdownToggle,
   MDBDropdownMenu,
   MDBDropdownItem,
} from "mdbreact";
import Sound from "../assets/yo.mp3";
import Typist from "react-text-typist";
import "../styles/navbar.css";
import { BrowserRouter as Router } from "react-router-dom";

class NavbarPage extends Component {
   state = {
      isOpen: false,
   };

   toggleCollapse = () => {
      this.setState({ isOpen: !this.state.isOpen });
   };

   navigateToIndex = () => {};
   /*    playAudio = () => {
      new Audio(Sound).play();
   }; */
   render() {
      return (
         <MDBNavbar
            color="indigo"
            dark
            expand="md"
            scrolling
            scrollingNavbarOffset={350}
            transparent
            className="navbarTransparent"
            sticky="top">
            <MDBNavbarBrand>
               <Typist
                  showCursor={false}
                  typingSpeed="100"
                  style={{ fontWeight: "bold" }}
                  sentences={["Ali Osman"]}
                  loop={false}
               />
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
               <MDBNavbarNav left>
                  <MDBNavItem>
                     <MDBNavLink className="fancy-link pb-0 mb-2" to="/">
                        <Typist
                           showCursor={false}
                           startDelay="900"
                           typingSpeed="100"
                           sentences={["Index"]}
                           loop={false}
                        />
                     </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                     <MDBNavLink to="/about" className="fancy-link pb-0 mb-2">
                        <Typist
                           showCursor={false}
                           startDelay="1400"
                           typingSpeed="100"
                           sentences={["About"]}
                           loop={false}
                        />
                     </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                     <MDBNavLink to="/home" className="fancy-link pb-0 mb-2">
                        <Typist
                           showCursor={false}
                           startDelay="1900"
                           typingSpeed="100"
                           sentences={["Works"]}
                           loop={false}
                        />
                     </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                     <MDBNavLink to="/login" className="fancy-link pb-0 mb-2">
                        <Typist
                           showCursor={false}
                           startDelay="2400"
                           typingSpeed="100"
                           sentences={["Login Form"]}
                           loop={false}
                        />
                     </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                     <MDBNavLink to="/three" className="fancy-link pb-0 mb-2">
                        <Typist
                           showCursor={false}
                           startDelay="2900"
                           typingSpeed="100"
                           sentences={["ThreeJS"]}
                           loop={false}
                        />
                     </MDBNavLink>
                  </MDBNavItem>
               </MDBNavbarNav>
            </MDBCollapse>
         </MDBNavbar>
      );
   }
}

export default NavbarPage;
