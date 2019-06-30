import React from 'react';
import styled from 'styled-components';
import Image from '../../Atoms/Image/Image';
import Link from '../../Atoms/Link/Link';
import {Container, Row, Col} from 'react-bootstrap';

const RecipeCard = (props) => {    
    return(
        <Wrapper fluid>
            <Row>
                <Col>
                    <Image src = {props.data.image_url}  />
                    <Body>
                            <Title>{props.data.title}</Title>
                            <Publisher>Published by {props.data.publisher}</Publisher>
                    </Body>
                    <Footer fluid>
                        <Row>
                            <Col md={12}>
                                <Link green href={props.data.source_url}>Details</Link>
                                <Link href={props.data.source_url} target="_blank">Recipe Url</Link>
                                {/* <a className="btn btn-primary"  href={props.data.source_url}>Details</a> */}
                                {/* <a className="btn btn-success" target="_blank" rel="noopener noreferrer" href={props.data.source_url}>Vist Site</a> */}
                            </Col>
                        </Row>
                    </Footer>
                </Col>
            </Row>
        </Wrapper>
    )
}

export default RecipeCard;

const Wrapper = styled(Container)`
    border: 1px solid #dbd9d9;
    padding:0;
    margin : 0.5em;
    :hover{
        box-shadow : 0em 0em 0.5em 0em #dbd9d9;
    }
`;

const Body = styled.section`
    width:100%;
    padding : 1.5em 1em;
    text-align:left;
    font-family: 'Bitter', serif;
`;

const Title = styled.h5`
    color: #ff5722;
`;
const Publisher = styled.p`
    color:#747171;
    font-family: 'Lobster', cursive;
`;

const Footer = styled(Container)`
    background-color:#f9f9f9;
    padding: 1.5em;
    display: flex;
`;
