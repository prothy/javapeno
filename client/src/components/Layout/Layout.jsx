import React from 'react';
import Footer from '../Navigation/Footer/Footer';
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import {Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Navigation/Header/Header";

const Layout = (props) => {
  return (
    <>
        <Header />
        <Container fluid>
            <Row>
                <Col xs={2} className={"d-flex flex-column flex-shrink-0 p-3"}>
                    <SideDrawer/>
                </Col>
                <Col xs={10}>
                    <main>{props.children}</main>
                </Col>
            </Row>
        </Container>
        <Footer />
    </>
  );
};

export default Layout;
