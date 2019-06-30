import React from 'react';
import styled from 'styled-components';
import RecipeCard from '../RecipeCard/RecipeCard';
import {Container, Row, Col} from 'react-bootstrap';

const RecipeBanner = (props) => {
    console.log(props.recipes);
    let mappedRecipes = [];
    mappedRecipes = props.recipes.map((recipe, key)=>{
        return (
            <Col key={key} xs={12} md={12} lg={4} sm={12}><RecipeCard title={recipe.title} image={recipe.image_url} publisher ={recipe.publisher} /></Col>
        )
    })
    return(
        <Wrapper>
            <Title>Top 30 Recipes</Title>
            <Container>
                <Row className="justify-content-md-center">
                    {mappedRecipes}
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