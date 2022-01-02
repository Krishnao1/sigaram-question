import React from "react";
import Logo from "../components/assets/logo.png";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import { MdOutlineSupportAgent, MdAddShoppingCart } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <Navbar className="header-bg" variant="dark">
        <Container style={{marginLeft:'1px'}}>
          <Navbar.Brand href="/" >
         
           <div style={{display:'flex',marginLeft:'1px'}}>
             <div style={{padding:'10px'}}>  
               <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            </div>
             <div>
               <div>  Petopia </div>
               <div> hi this is shoping site</div>
              </div>
           </div>
            
          
          
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">
                Contact Us
                <MdOutlineSupportAgent />{" "}
              </Nav.Link>
              <Nav.Link href="/cart">
                Cart <MdAddShoppingCart />
              </Nav.Link>
              <Nav.Link href="/">
                <FaUserAlt /> My Account
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
