import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import './style.css';

export default function index() {
    return (

        <Navbar variant="dark" id="navbar-style">
            <Navbar.Brand href="/">Google Books Search</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/search">Search</Nav.Link>
                <Nav.Link href="/saved">Saved</Nav.Link>
            </Nav>
        </Navbar>

    )
}
