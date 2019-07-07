import React from 'react';
import styled from 'styled-components';
import RecipeCard from '../../Molecules/Recipe/Recipe';
import {Container, Row, Col} from 'react-bootstrap';

const RecipeList = (props) => {
    let mappedRecipes = [];
    mappedRecipes = props.recipes.map((recipe)=>{
        return (
            <Col key={recipe.recipe_id} xs={12} md={12} lg={4} sm={12}>
                <RecipeCard data = {recipe} detailHander = {props.detailHander} />
            </Col>
        )
    })
    return(
        <Wrapper>
            <Title>Top Popular Recipes</Title>
            <Container>
                <Row className="justify-content-md-center">
                    {mappedRecipes}
                </Row>
            </Container>
        </Wrapper>
    )
}

export default RecipeList;

const Wrapper = styled.section`
    padding : 1.5em 0em;
    text-align: center;
    background-color:#fff;
`;

const Title = styled.h3`
    font-family: 'Bitter', serif;
    color: #8bc34a;
    margin: 0.7em auto;
    text-transform:uppercase;
`;