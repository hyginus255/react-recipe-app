import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Footer = () => {

    const footer = {
        boxShadow: '0 0.32em 2em rgba(153, 153, 153, .2)',
        backgroundColor: 'rgba(255, 255, 255, .8)'
    }

    return(
        <Container fluid style={footer}>
            <Row>
                <Col lg={12} md={12} sm={12} xs={12} className="p-3 text-center">
                    <p className="m-0">Copyright © 2019 Ukeh Hyginus Nnamdi</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;
