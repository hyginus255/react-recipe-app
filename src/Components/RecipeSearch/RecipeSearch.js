import React from 'react';
import {Container, Row, Col, Form, Button,InputGroup} from 'react-bootstrap';

const RecipeSearch = (props) => {
    const {value , searchChangeHandler, searchSubmitHandler} = props;
    return (
        <Container fluid className="p-5">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h2 className="text-warning text-center text-capitalize">Get details of your recipe</h2>
                    <p className="text-center">
                        This is a simple platform to search for your loved recipes with details. Happy Searching ... 
                        <i className="far fa-smile-wink text-danger"></i>
                    </p>
                    <Form onSubmit={searchSubmitHandler.bind(this)}>
                        <Form.Group>
                            <InputGroup>
                                <Form.Control type="text" placeholder="Rice, Buggar, Shawama" onChange={searchChangeHandler.bind(this)} value={value}  />
                                <Button type="submit" variant="success" className="rounded-0"><i className="fas fa-search text-white"></i></Button>
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
   
export default RecipeSearch;

