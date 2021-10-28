import React from 'react';
import {CashStack, HouseDoorFill, PersonLinesFill, PersonPlusFill} from "react-bootstrap-icons";
import {Nav, NavLink, Accordion } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

import './SideDrawer.css';

const SideDrawer = () => {
  return(
      <Nav className="flex-column" variant={"pills"} >
        <LinkContainer to={"/home"}>
            <NavLink eventKey={"home"} >
                <HouseDoorFill />
                Home
            </NavLink>
        </LinkContainer>
        <Accordion flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Employees</Accordion.Header>
                <Accordion.Body>
                <LinkContainer to={"/employees"}>
                    <NavLink eventKey={"employees"} >
                        <PersonLinesFill />
                        List all employees
                    </NavLink>
                </LinkContainer>
                <LinkContainer to={"/create-employee"} >
                    <NavLink eventKey={"create-employee"} >
                        <PersonPlusFill />
                        Add new employee
                    </NavLink>
                </LinkContainer>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Transactions</Accordion.Header>
                <Accordion.Body>
                <LinkContainer to={"/transactions"}>
                    <NavLink eventKey={"transactions"} >
                        <CashStack />
                        List all transactions
                    </NavLink>
                </LinkContainer>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
      </Nav>


      );
};

export default SideDrawer;
