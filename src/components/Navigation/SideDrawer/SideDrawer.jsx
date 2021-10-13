import React from 'react';
import {CashStack, HouseDoorFill, PersonLinesFill} from "react-bootstrap-icons";
import './SideDrawer.module.css';
import {Nav, NavItem, NavLink} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

const SideDrawer = () => {
  return(
      <Nav className="flex-column" variant={"pills"} defaultActiveKey={"home"}>
          <NavItem>
              <LinkContainer to={"/home"}>
                  <NavLink eventKey={"home"} >
                      <HouseDoorFill />
                      Home
                  </NavLink>
              </LinkContainer>
          </NavItem>
          <NavItem>
              <LinkContainer to={"/employee"}>
                  <NavLink eventKey={"employee"} >
                      <PersonLinesFill />
                      Employee
                  </NavLink>
              </LinkContainer>
          </NavItem>
          <NavItem>
              <LinkContainer to={"/transactions"}>
                  <NavLink eventKey={"transactions"} >
                      <CashStack />
                      Transaction
                  </NavLink>
              </LinkContainer>
          </NavItem>
      </Nav>


      );
};

export default SideDrawer;
