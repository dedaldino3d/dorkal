import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'


export const Container = styled.span`
    display: inline-block;
    font-size: 13px;
    color: var(--gray-60);
`;


export const Timestamp = props => (
    <Container>{props.time}</Container>
)

Timestamp.propTypes = {
    time: PropTypes.string.isRequired,
}


export default Timestamp