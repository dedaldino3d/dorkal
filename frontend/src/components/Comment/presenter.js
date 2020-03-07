import React from 'react'
import PropTypes from 'prop-types'

import Container, { CommentContent } from './styles'
import Avatar from '../general_components/avatar'
import { FaRegComment, FaRegHeart } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'


export const Comment = props => {
    return (
        <Container>
            <div>
                <Avatar
                source={props.comment.user.profile.profile_image || require('images/noPhoto.jpg')}
                width={38}
                height={38}
                alt={`${props.comment.user.username}_profile_image`}
                />
            </div>
            <CommentContent>
                <div>
                    <a href="#">{props.comment.user.username}</a>
                    <p>{props.comment.created_at}</p>
                </div>
                <div>
                    <p>{props.comment.caption}</p>
                </div>
                <div>
                    <span><FaRegComment/></span>
                    <span><FaRegHeart/></span>
                    <span><MdMessage/></span>
                </div>
            </CommentContent>
        </Container>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        created_at: PropTypes.number.isRequired,
        caption: PropTypes.string.isRequired,
        user: PropTypes.shape({
            username: PropTypes.string.isRequired,
            profile: PropTypes.shape({
                profile_image: PropTypes.string
            }).isRequired,
        }).isRequired
    })
}
export default Comment
