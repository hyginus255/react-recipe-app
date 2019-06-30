import React from 'react';
import styled from 'styled-components';
import {Navbar} from 'react-bootstrap';

const NavBar = () => {
    return (
        <Nav>
            <Wrapper href="#">
                <i className="fas fa-hamburger"></i>
                <h3>Search Recipe</h3>
            </Wrapper>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <GitIcon>
                    <a href="https://www.facebook.com"><i className="fab fa-github"></i></a>
                </GitIcon>
            </Navbar.Collapse>
        </Nav>
    );
}

const Nav = styled(Navbar)`
    padding : 1.2em 3em;
    box-shadow: 0 0.32em 2em rgba(153, 153, 153, .2);
    top: 0em;
    // position: -webkit-sticky;
    // position: sticky;
    background-color:rgba(255, 255, 255, .8);
`;

const Wrapper = styled(Navbar.Brand)`
    display : flex;
    i{
        color: #ff5722;
        font-size : 2em;
    }
    i:hover{
        color: #8bc34a;
        text-shadow: 0 0 0.2em rgba(153, 153, 153, .2);
        transition : all .5s;
    }
    h3{
        font-family: 'Lobster', cursive;
        color : #8bc34a;
        margin: 0 0.6em;
    }
`;

const GitIcon = styled(Navbar.Text)`
    i{
        color: #000;
        font-size : 2em;
    }

    i:hover{
        color: #8bc34a;
        text-shadow: 0 0 0.2em rgba(153, 153, 153, .2);
        transition : all .5s;
    }
`;

export default NavBar;