import React from 'react';
import styled from 'styled-components';
import SearchInput from '../../Molecules/SearchInput/SearchInput';
import {Container, Row, Col} from 'react-bootstrap';

const RecipeSearch = () => {
    return (
        <Wrapper fluid>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Title>Get details of your recipe</Title>
                    <Tagline>
                        This is a simple platform to search for your loved recipes with details. Happy Searching ... <i className="far fa-smile-wink"></i>
                    </Tagline>
                    <SearchInput />
                </Col>
            </Row>
        </Wrapper>
    );
}
   
export default RecipeSearch;


const Wrapper = styled(Container)`
    padding : 2.5em;
    text-align: center;
`;

const Title = styled.h3`
    font-family: 'Bitter', serif;
    color: #ff5722;
    margin: 0.7em auto;
    text-transform:uppercase;
`;

const Tagline = styled.p`
    i{
        color:#ff5722;
        text-align:justify;
    }
`;

