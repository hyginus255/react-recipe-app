import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
    return(
        <Wrapper fluid>
            <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <Text>Copyright © 2019 Ukeh Hyginus Nnamdi</Text>
                </Col>
            </Row>
        </Wrapper>
    )
}

export default Footer;

const Wrapper = styled(Container)`
    text-align:center;
    padding: 1.2em;
    box-shadow: 0.32em 0 2em rgba(153, 153, 153, .2);
    background-color: transperent;
`;

const Text = styled.p`
    margin:0em;
`;