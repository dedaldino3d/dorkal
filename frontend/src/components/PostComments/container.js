import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Comment from '../Comment/presenter'


export const Container = styled.ul`
    margin: .165em .3525em;
    margin-left: 3em;
`;

export const PostComments = props => (
    <Container>
        {props.comments.map( comment => (
            <Comment key={comment.id} comment={comment} />
        ))}
    </Container>
);


PostComments.propTypes = {
    comments: PropTypes.array.isRequired
}