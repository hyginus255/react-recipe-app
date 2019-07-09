import React from 'react';
import Recipe from '../Recipe/Recipe';
import {Container, Row, Col} from 'react-bootstrap';

const RecipeList = (props) => {

    let Recipes = [];

    //Mapping through the recipes from props
    Recipes = props.recipes.map((recipe)=>{
        return (
            <Col lg={4} md={4} sm={6} xs={12} key={recipe.recipe_id} className="p-3">
                <Recipe data = {recipe} detailHandler = {props.detailHandler} />
            </Col>
        )
    })

    return(
        <Container fluid className="bg-white">
            <Row>
                <Col lg={12}>
                    <h2 className="text-center text-success my-4">Top Popular Recipes</h2>
                </Col>
                <Container>
                    <Row>
                        {props.error ? <Col lg={12} className="py-3"><h3 className="text-danger text-center my-5">{props.error}</h3></Col> : Recipes}
                    </Row>
                </Container>
            </Row>
        </Container>
    )
}

export default RecipeList;
