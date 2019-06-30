import React from 'react';
import styled from 'styled-components';
import RecipeCard from '../RecipeCard/RecipeCard';
import {Container, Row, Col} from 'react-bootstrap';

const RecipeBanner = () => {
    return(
        <Wrapper>
            <Title>Recipes List</Title>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={12} lg={4} sm={12}><RecipeCard /></Col>
                    <Col xs={12} md={12} lg={4} sm={12}><RecipeCard /></Col>
                    <Col xs={12} md={12} lg={4} sm={12}><RecipeCard /></Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default RecipeBanner;

const Wrapper = styled.section`
    padding : 1.5em 1.5em;
    text-align: center;
    background-color:#fff;
`;

const Title = styled.h3`
    font-family: 'Bitter', serif;
    color: #8bc34a;
    margin: 0.7em auto;
    text-transform:uppercase;
`;