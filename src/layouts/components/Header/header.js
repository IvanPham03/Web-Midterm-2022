import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../../assets/images/logo.svg';
import user from '../../../assets/images/user.svg';


function header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
            <Container>
                <Navbar.Brand href="#"><img src={logo} alt='item'/></Navbar.Brand>
                <Nav>
                    <Nav.Link href='#stories'>STORIES</Nav.Link>
                    <Nav.Link href='#product'>PRODUCT</Nav.Link>
                    <Nav.Link href='#contact'>CONTACT</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default header;