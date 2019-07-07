import React, {Component} from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';
import Link from '../../Atoms/Link/Link';
import Image from '../../Atoms/Image/Image';
// import {recipe} from '../../../tempDetail';

class RecipeDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            recipe : {},
            url : `https://www.food2fork.com/api/get?key=6986d75ddbdf856e3cb686faa1c96481&&rId=${this.props.id}`,
        }
    }

    async componentDidMount(){
        try{
            const data = await fetch(this.state.url);
            const jsonData = await data.json();
            this.setState({
                recipe :jsonData.recipe,
            })
        }catch(error){
            console.log("Something went wrong getting component details");
        }
    }

    render(){
         const {image_url, ingredients,publisher,publisher_url,source_url,title} = this.state.recipe;
         let ingredientData = [];
         if(ingredients){
            ingredientData = ingredients.map((data,key) => (
                <li key={key}>{data}</li>
            ));
         }
         return(
            <Wrapper>
                <Row>
                    <Col md={6} style={{padding:"0em 2em", marginBottom: '1.5em'}}>
                        {/* <Link href="#" type="button" onClick={this.props.indexHandler.bind(1)}>Back to Recipe List</Link> */}
                        <button type="button" onClick={this.props.indexHandler.bind(1)} className="btn btn-warning">Go Back</button>
                        <br/><br/>
                        <Image src = {image_url} height = "20em" />
                    </Col>
                    <Col md={6} style={{padding:"0em 2em"}}>
                        <Title>{title}</Title>
                        <Publisher>Published by {publisher}</Publisher>
                        <Link green href={publisher_url} target="_blank">Publisher Url</Link>
                        <Link href={source_url} target="_blank">Recipe Url</Link>
                        <br/><br/>
                        <h5>Ingredients</h5>
                        <hr/>
                        <ul>
                            {ingredientData}
                        </ul>
                    </Col>
                </Row>
            </Wrapper>
        )

    }
}

export default RecipeDetails;

const Wrapper = styled(Container)`
    padding 3em 0em;
`;

const Title = styled.h5`
    // ff5722
    color: #8bc34a;
    text-transform : uppercase;
`;

const Publisher = styled.p`
    color : #ff5722;
    font-family: 'Lobster', cursive;
`;