import React from 'react'
import styled from 'styled-components'

const Image = (props) => { 
    let imgUrl = props.src;
    const Element = styled.section`
        width: 100%;
        height:12em;
        background-image: ${`url(${imgUrl})`};
        background-size : cover;
        background-repeact : no-repeat;
        background-position : center;
    `;

    return(
        <React.Fragment>
            <Element />
        </React.Fragment>
    );
}

export default Image;


