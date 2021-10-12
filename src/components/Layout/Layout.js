import React from 'react';
import Footer from '../Navigation/Footer/Footer';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = (props) => {
  return (
    <>
        <Toolbar />
        <Container fluid>
            <Row>
                <Col xs={2}>
                    <p>Test</p>
                    <p>Test</p>
                    <p>Test</p>
                </Col>
                <Col xs={10}>
                    <p>Test</p>
                    <p>Test</p>
                    <p>Test</p>
                </Col>
            </Row>
        </Container>
        <SideDrawer />
        <main>{props.children}</main>
        <Footer />
    </>
  );
};

export default Layout;
