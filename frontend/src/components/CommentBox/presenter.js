import React from 'react'
import PropTypes from 'prop-types'

import Container, { Form } from './styles'
import Avatar from '../Avatar'



export const CommentBox = props => {
    return (
        <Container>
            <Avatar
            tam={32}
            source={props.user.profile.profile_image || require('../../images/noPhoto.jpg')}
            alt={props.user.username}
            />
            <Form>
                <input
                placeholder='Add a comment...'
                type='text'
                value={props.content}
                onChange={props.handleInputChange}
                onKeyPress={props.handleKeyPress}
                />
            </Form>
        </Container>
    )
}


CommentBox.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        profile: PropTypes.shape({
            profile_image: PropTypes.string
        }),
    }).isRequired,
    handleKeyPress: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired
}


export default CommentBox