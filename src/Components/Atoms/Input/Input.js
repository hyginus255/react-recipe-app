import React from 'react'
import styled from 'styled-components'

const Input = (props) => {

    const Input = styled.input.attrs({
        type : props.type,
        placeholder : props.placeholder || "fill in"

    })`
        width: 100%;
        border: 0.02em solid #8bc34a;
        padding : 0.7em;
        background-color:#fff;
    `;

    return(
        <React.Fragment>
            <Input type={props.type} placeholder={props.placeholder} />
        </React.Fragment>
    );
}

export default Input;


