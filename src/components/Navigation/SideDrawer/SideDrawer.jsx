import React from 'react';
import {CashStack, HouseDoorFill, PersonLinesFill, PersonPlusFill} from "react-bootstrap-icons";
import './SideDrawer.module.css';
import {Nav, NavItem, NavLink} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

const SideDrawer = () => {
  return(
      <Nav className="flex-column" variant={"pills"} >
          <NavItem>
              <LinkContainer to={"/home"}>
                  <NavLink eventKey={"home"} >
                      <HouseDoorFill />
                      Home
                  </NavLink>
              </LinkContainer>
          </NavItem>
          <NavItem>
              <LinkContainer to={"/employees"}>
                  <NavLink eventKey={"employees"} >
                      <PersonLinesFill />
                      Employees
                  </NavLink>
              </LinkContainer>
          </NavItem>
          <NavItem className={"sub-item"}>
              <LinkContainer to={"/create-employee"} >
                  <NavLink eventKey={"create-employee"} >
                      <PersonPlusFill />
                      Create new user
                  </NavLink>
              </LinkContainer>
          </NavItem>
          <NavItem>
              <LinkContainer to={"/transactions"}>
                  <NavLink eventKey={"transactions"} >
                      <CashStack />
                      Transactions
                  </NavLink>
              </LinkContainer>
          </NavItem>
      </Nav>


      );
};

export default SideDrawer;
