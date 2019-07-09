import React, {Component} from 'react';
import {Container, Row, Col, Button, Image} from 'react-bootstrap';
// import {recipe} from '../../tempDetail';

class RecipeDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            recipe :{},
            url : `https://www.food2fork.com/api/get?key=7ad5d20837888d331ed0c0d1e3f589f1&&rId=${this.props.id}`,
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
            console.log(error);
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
            <Container className="p-3 mt-4">
                <Row>
                    <Col md={7}>
                        <Button variant="warning" className="mb-4" onClick={this.props.indexHandler.bind(1)}>Back to Recipe List</Button>
                        <Row>
                            <Col md={12} className="mb-4">
                                <Image src={image_url} style={{width:'100%'}} />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={5}>
                        <h4 className="text-success">{title}</h4>
                        <p className="text-warning">Published by {publisher}</p>
                        <Button variant="primary m-1" href={publisher_url} target="_blank">Publisher Url</Button>
                        <Button variant="success m-1" href={source_url} target="_blank">Recipe Url</Button>
                        <h4 className="text-success my-3">Ingredients</h4>
                        <ul>
                            {ingredientData}
                        </ul>
                    </Col>
                </Row>
            </Container>
         )

    }
}

export default RecipeDetails;