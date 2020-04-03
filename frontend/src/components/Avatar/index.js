import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components';

export const Img = styled.img`
    width: ${props => `${props.tam}px`};
    height: ${props => `${props.tam}px`};
    border-radius: 50%;
    /* border: 1px solid #787878; */
    max-width: 100%;
    box-shadow: inset 0 1px 0 rgba(0,0,0,0.25),
    inset 0 -1px 0 rgba(0,0,0,0.25), 
    inset 1px 0 0 rgba(0,0,0,0.25), 
    inset -1px 0 0 rgba(0,0,0,0.25);
    flex-shrink: 0;
`;


export const Avatar = props =>  (
        <Img 
        src={props.source}
        width={props.tam}
        height={props.tam}
        alt={`${props.alt}_profile_image`}
        /> 
    );

Avatar.propTypes = {
    source: PropTypes.string.isRequired,
    tam: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired
}

export default Avatar