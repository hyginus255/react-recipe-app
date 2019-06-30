import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    
    let outline = props.outline ? true : false
    let color = props.green ? "#8bc34a" : "#ff5722"

    const Button = styled.button`
        border: ${`0.02em solid ${color}`};
        background-color: ${() => outline ? "#fff" : color};
        color: ${() => outline ? color : "#fff" };
        padding: 0.4em 1.2em;
        cursor:pointer;
        :hover{
            background-color: ${() => outline ? color : "#fff"};
            color: ${() => outline ? "#fff" : color };
            transition: all .5s;
        }
    `;

    return (
        <Button>{props.children}</Button>
    );
}

export default Button;