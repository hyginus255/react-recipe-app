import React from 'react';
import styled from 'styled-components';
import Image from '../../Atoms/Image/Image';
import Link from '../../Atoms/Link/Link';
import Button from '../../Atoms/Button/Button'
import {Container, Row, Col} from 'react-bootstrap';

const Recipe = (props) => {    
    const {data, detailHander} = props;
    // console.log(detailHander);
    return(
        <Wrapper fluid>
            <Row>
                <Col>
                    <Image src = {data.image_url}  />
                    <Body>
                            <Title>{data.title}</Title>
                            <Publisher>Published by {data.publisher}</Publisher>
                    </Body>
                    <Footer fluid>
                        <Row>
                            <Col md={12}>
                                {/* <Link green href={data.source_url}></Link> */}
                                <Button  onClick={()=>{detailHander(1,246454);}}  green>Details</Button>
                                <Link href={data.source_url} target="_blank">Recipe Url</Link>
                            </Col>
                        </Row>
                    </Footer>
                </Col>
            </Row>
        </Wrapper>
    )
}

export default Recipe;

const Wrapper = styled(Container)`
    border: 1px solid #dbd9d9;
    padding:0;
    margin : 0.5em 0em;
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
