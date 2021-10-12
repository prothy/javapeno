import React from 'react';
import {Link} from "react-router-dom";
import {CashStack, House, Person} from "react-bootstrap-icons";
//import classes from './SideDrawer.module.css';

const SideDrawer = () => {
  return(
      <ul className={"nav nav-pills flex-column mb-auto"}>
          <li className={"nav-item"}>
              <Link className={"nav-link link-dark"} to={"/"}>
                    <House/>
                  Home
              </Link>
          </li>
          <li className={"nav-item"}>
              <Link className={"nav-link active"} to={"/employees"}>
                  <Person/>
                  Employees
              </Link>
          </li>
          <li className={"nav-item"}>
              <Link className={"nav-link link-dark"}  to={"/transactions"}>
                  <CashStack/>
                  Transactions
              </Link>
          </li>
      </ul>

      );
};

export default SideDrawer;
