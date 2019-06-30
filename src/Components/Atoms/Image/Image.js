import React from 'react'
import styled from 'styled-components'

const Image = (props) => {  
    return(
        <React.Fragment>
            <Element src={props.src} alt={props.alt} />
        </React.Fragment>
    );
}

export default Image;

const Element = styled.img`
    width: 100%;
    height:auto;
`;


