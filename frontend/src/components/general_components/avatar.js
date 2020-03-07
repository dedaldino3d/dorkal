import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components';

export const Img = styled.img`
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    border-radius: 50%;
    border: 1px solid #787878;
    max-width: 100%;
    box-shadow: inset 0 1px 0 rgba(0,0,0,0.25),
    inset 0 -1px 0 rgba(0,0,0,0.25), 
    inset 1px 0 0 rgba(0,0,0,0.25), 
    inset -1px 0 0 rgba(0,0,0,0.25);
`;


export const Avatar = props => {
    return (
        <Img 
        src={props.source}
        width={props.width}
        height={props.height}
        alt={props.alt}
        /> 
    )
}

Avatar.propTypes = {
    source: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired
}

export default Avatar