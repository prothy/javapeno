import React from 'react';
import Footer from '../Navigation/Footer/Footer';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Header from "../Navigation/Header/Header";

const Layout = (props) => {
  return (
    <>
        <Header />
        <Toolbar />
        <SideDrawer />
        <main>{props.children}</main>
        <Footer />
    </>
  );
};

export default Layout;
