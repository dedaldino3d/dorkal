import React from 'react'
import PropTypes from 'prop-types'

import Container, { Form } from './styles'
import Avatar from '../Avatar/avatar'



export const CommentBox = props => {
    return (
        <Container>
            <Avatar/>
            <Form>
                <input
                placeholder='Add a comment...'
                type='text'
                />
            </Form>
        </Container>
    )
}

// Comment.propTypes = {

// }

export default CommentBox