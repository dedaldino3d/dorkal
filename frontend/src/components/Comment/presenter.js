import React from 'react'
import PropTypes from 'prop-types'

import Container, { CommentHeader, CommentContent } from './styles'
import Avatar from '../Avatar/avatar'
import ButtonFollow from '../general_components/buttonFollow'

import { FaRegComment, FaRegHeart } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'


export const Comment = props => {
    const user = {
        is_self: false,
    }
    return (
        <Container>
            <Avatar
            // source={props.comment.user.profile.profile_image || require('../../images/noPhoto.jpg')}
            source={require('../../images/noPhoto.jpg')}
            width={38}
            height={38}
            // alt={`${props.comment.user.username}_profile_image`}
            alt="3D"
            />
            <div>
                <CommentHeader>
                    <div>
                        <a href="#">Dedaldino</a>
                        &nbsp;
                        <span>@username</span>
                        <p>08/03/2020</p>
                    </div>
                    <ButtonFollow user={user}/>
                </CommentHeader>
                <CommentContent>
                    <p> Queremos que eles sejam distribuídos uniformemente no eixo horizontal, para que, 
                        quando redimensionamos o navegador, tudo seja dimensionado corretamente e sem consultas à mídia.
                    </p>
                    <div>
                        <span><FaRegComment/></span>
                        <span><FaRegHeart/></span>
                        <span><MdMessage/></span>
                    </div>
                </CommentContent>
            </div>
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
