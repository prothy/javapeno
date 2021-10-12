import React from 'react';
import {CashStack, HouseDoorFill, PersonLinesFill} from "react-bootstrap-icons";
import './SideDrawer.module.css';
import SideDrawerListElement from "./SideDrawerListElement";

const SideDrawer = () => {
  return(
      <ul className={"nav nav-pills flex-column mb-auto"}>
          <SideDrawerListElement link={"/"} icon={<HouseDoorFill />} text={"Home"} linkClass={"nav-link active"}/>
          <SideDrawerListElement link={"/employees"} icon={<PersonLinesFill />} text={"Employees"} linkClass={"nav-link link-dark"}/>
          <SideDrawerListElement link={"/transactions"} icon={<CashStack />} text={"Transactions"} linkClass={"nav-link link-dark"}/>
      </ul>

      );
};

export default SideDrawer;
