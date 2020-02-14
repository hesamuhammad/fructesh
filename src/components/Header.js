import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
      <NavbarBrand href="/home" style={{paddingLeft: "15%", paddingTop: "25px", paddingBottom: "25px"}}>
          <img src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/11/retina-logo.png" alt='gambar logo' style={{width:"45%"}}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/" style={{fontWeight: "bold"}}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" style={{fontWeight: "bold"}}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/team" style={{fontWeight: "bold"}}>Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/gallery" style={{fontWeight: "bold"}}>Gallery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog" style={{fontWeight: "bold"}}>Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contacts" style={{fontWeight: "bold"}}>Contacts</NavLink>
            </NavItem>

          </Nav>
          <div style={{marginRight: "30%"}}>
          <NavbarText><i className='fa fa-search' style={{fontSize: "30px"}}></i><span style={{marginRight: "5%"}}></span></NavbarText>
          <NavbarText><i className='fa fa-reorder'style={{fontSize: "30px"}}></i></NavbarText>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;