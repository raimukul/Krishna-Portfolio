import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
 MDBContainer, MDBIcon } from "mdbreact";

class NavbarPage extends Component {
state = {
  collapseID: ""
};

toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

render() {
  return (
    <MDBContainer className="font-head">
      <MDBNavbar color="transparent" dark expand="md" style={{ marginTop: "20px" }} className="navbar-fixed-top">
        <MDBNavbarBrand href="/" >
          <strong className="white-text">Krishana Nishad</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
          <MDBNavbarNav right>
          <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/">
                <MDBIcon icon="cog" className="mr-1" />Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/resume">
                <MDBIcon icon="cog" className="mr-1" />Resume</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/portfolio">
                <MDBIcon icon="cog" className="mr-1" />Portfolio</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/contact">
                <MDBIcon icon="envelope" className="mr-1" />Contact</MDBNavLink>
            </MDBNavItem>
           
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      
    </MDBContainer>
    );
  }
}

export default NavbarPage;