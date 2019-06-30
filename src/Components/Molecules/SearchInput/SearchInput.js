import React from 'react';
import styled from 'styled-components';
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';

const SearchInput = () => {
    return (
        <Wrapper>
            <Input type="text" placeholder="Rice, Buggar, Shawama" />
            <Button ><i className="fas fa-search"></i></Button>
        </Wrapper>
    );
}

export default SearchInput;

const Wrapper = styled.section`
    padding:0;
    display : flex;
`;


