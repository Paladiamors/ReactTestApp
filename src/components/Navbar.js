import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Button,
} from "reactstrap";

export default function MainNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className="mb-5" color="light" light expand="md">
      <NavbarBrand tag={Link} to="/">
        React Site
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/dashboard">
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/pricing">
              Pricing
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/repl">
              Repl
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Forms
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink tag={Link} to="/register">
                  Sign Up
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink tag={Link} to="/comment">
                  Comment
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Components
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink tag={Link} to="/tables">
                  Tables
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink tag={Link} to="/csrfLogin">
                  CsrfLogin
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink tag={Link} to="/csrfLoginOnSubmit">
                  CsrfLoginOnSubmit
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Apps
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink tag={Link} to="/person">
                  Person
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/login">
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <Button tag={Link} to="/signup" color="info">Sign Up</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
