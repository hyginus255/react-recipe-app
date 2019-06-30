import React from 'react';
import styled from 'styled-components';
import Image from '../../Atoms/Image/Image';
import Button from '../../Atoms/Button/Button';
import {Container, Row, Col} from 'react-bootstrap';

const RecipeCard = () => {
    let imgScr = "https://www.weightwatchers.com/us/sites/default/files/styles/wwvs_default_image/public/article_masthead/allaboutzeropointfoods_yk_ww_080218_0spvfoods_190_1250x600.jpg?itok=Fo_ThSVk";
    return(
        <Wrapper fluid>
            <Row>
                <Col>
                    <Image src = {imgScr} alt="Recipe Image" />
                    <Body>
                            <Title>Jalapeno Popper Grilled Cheese Sandwich</Title>
                            <Publisher>Closet Cooking</Publisher>
                    </Body>
                    <Footer fluid>
                        <Row>
                            <Col md={12}>
                                <Button green>Details</Button>
                                <Button>Vist Site</Button>
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