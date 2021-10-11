import React from 'react';
import Aux from '../../hoc/Aux';
import Footer from '../Navigation/Footer/Footer';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <main>{props.children}</main>
      <Footer />
    </Aux>
  );
};

export default Layout;
