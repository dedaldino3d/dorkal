import React from 'react'
import styled from 'styled-components';

export const Container = styled.button`
    max-width: ${props => `${props.maxWidth}px`};
    max-height: ${props => `${props.maxHeight}px`};
    border-width: ${props => `${props.Bwidth}px`} ;
    border-color: ${props => `${props.Bcolor}`};
    color: ${props => `${props.color}`};
    padding-top: ${props => `${props.pt}px`};
    padding-right: ${props => `${props.pr}px`};
    padding-left: ${props => `${props.pl}px`};
    padding-bottom: ${props => `${props.pb}px`};
    background-color: ${props => `${props.backColor}`};
`;


export const button = props => {
    return (
        <Container
        maxWidth={props.maxWidth}
        maxHeight={props.maxHeight}
        Bwidth={props.Bwidth}
        Bcolor={props.Bcolor}
        color={props.color}
        pt={props.pt}
        pr={props.pr}
        pl={props.pl}
        pb={props.pb}
        backColor={props.backColor}
        >{props.text}</Container>
    )
}

export default button