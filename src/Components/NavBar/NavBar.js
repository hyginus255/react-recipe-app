import React from 'react';
import {Navbar} from 'react-bootstrap';

const NavBar = () => {

    const nav = {
        boxShadow: '0 0.32em 2em rgba(153, 153, 153, .2)',
        backgroundColor: 'rgba(255, 255, 255, .8)'
    }

    const icon = {
        fontSize : '2em',
        fontFamily: "'Lobster', cursive"
    }

    return (
        <Navbar className="p-2" style={nav}>
            <Navbar.Brand href="#" className="text-success mx-3" style={icon}>
            <i className="fas fa-hamburger text-warning mr-3"></i>
            {' Search Recipe'}
            </Navbar.Brand>
        </Navbar>
    );
}

export default NavBar;