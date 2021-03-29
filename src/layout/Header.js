import React from 'react'
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <>

            {/* <Navbar bg="dark" expand="lg">
                <Nav.Item>
                    <Link to="/contacts/add" className="btn btn-success">
                        Add Contact
                </Link>
                </Nav.Item>

            </Navbar> */}

            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand>Contact Book</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Link to="/contacts/add" className="btn btn-success">
                        Add Contact
                </Link>
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}

export default Header

