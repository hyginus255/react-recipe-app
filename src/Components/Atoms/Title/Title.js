import React from 'react';
import styled from 'styled-components';

const Title = (props) => {
    return (
        <Title.Title>{props.childeren}</Title.Title>
    )
}

export default Title;

Title.Title = styled.h3`
    font-family: 'Bitter', serif;
    color: #ff5722;
    margin: 0.7em auto;
    text-transform:uppercase;
`;