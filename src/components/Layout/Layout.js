import React from 'react';
import Footer from '../Navigation/Footer/Footer';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => {
  return (
    <>
      <Toolbar />
      <SideDrawer />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
