import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
      <NavbarBrand href="/">
          <img src="https://ld-wp73.template-help.com/wordpress/prod_21699/v1/wp-content/uploads/2018/11/retina-logo.png" alt='gambar logo' /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="//">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="//">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="//">Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="//">Gallery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="//">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="//">Contacts</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>Search</NavbarText>
          <NavbarText>Menu</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;