import React from 'react';
import {Card, Button} from 'react-bootstrap';

const Recipe = (props) => {    

    const {data, detailHandler} = props;
    const id = data.recipe_id;
    
    return(
        <React.Fragment>
            <Card>
                <Card.Img variant="top" src = {data.image_url} style={{height:"14em"}} />
                <Card.Body>
                    <Card.Title className="text-success">{data.title}</Card.Title>
                    <Card.Text className="font-italic text-warning">
                        Published by {data.publisher}
                    </Card.Text>
                    <Button variant="primary m-1 rounded-0"  onClick={detailHandler.bind(this,0,id)}>Details</Button>
                    <Button href={data.source_url} target="_blank" variant="success m-1 rounded-0">Recipe Url</Button>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default Recipe;