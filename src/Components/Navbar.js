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
         <MDBNavbar color="indigo" dark expand="md">
            <MDBNavbarBrand>
               <strong className="white-text">Ali Osman</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
               <MDBNavbarNav left>
                  <MDBNavItem>
                     <MDBNavLink to="/">Index</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                     <MDBNavLink to="/about">About Me</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                     <MDBNavLink to="/home">Works</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                     <MDBNavLink to="/login">Login Form</MDBNavLink>
                  </MDBNavItem>
               </MDBNavbarNav>
            </MDBCollapse>
         </MDBNavbar>
      );
   }
}

export default NavbarPage;
