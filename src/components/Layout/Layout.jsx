import React from 'react';
import Footer from '../Navigation/Footer/Footer';
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = (props) => {
  return (
    <>
        <Toolbar />
        <Container fluid>
            <Row>
                <Col xs={2} className={"d-flex flex-column flex-shrink-0 p-3"}>
                    <SideDrawer/>
                </Col>
                <Col xs={10}>
                    <main>{props.children}</main>
                    <p>Test</p>
                    <p>Test</p>
                </Col>
            </Row>
        </Container>
        <Footer />
    </>
  );
};

export default Layout;
