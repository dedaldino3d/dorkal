import React from 'react'
import PropTypes from 'prop-types'

import { Li, CommentHeader, CommentContent } from './styles'
import Avatar from '../Avatar'
import ButtonFollow from '../ButtonFollow'
import { FooterPost, Button} from '../Post/styles'
import { FaRegComment, FaRegHeart } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'





export const Comment = props => {
    return (
        <Li>
            <Avatar
            source={ /*props.comment.user.profile.profile_image || */require('../../images/noPhoto.jpg')}
            tam={38}
            alt={/*props.comment.user.username*/ 'dedaldino'}
            />
            <div>
                <CommentHeader>
                    <div>
                        <a href="#">{props.comment.user.profile.full_name || props.comment.user.username}</a>

                        <span>@{props.comment.user.username}</span>
                        <span>{props.comment.natural_time}</span>
                    </div>
                    <ButtonFollow user={props.comment.user}/>
                </CommentHeader>
                <CommentContent>
                    <p>{props.comment.content}</p>
                    <FooterPost>
                        <Button><FaRegComment/></Button>
                        <Button><FaRegHeart/></Button>
                        <Button><MdMessage/></Button>
                    </FooterPost>
                </CommentContent>
            </div>
        </Li>
    )
}

Comment.defaultProps = {
    comment: PropTypes.shape({
        natural_time: '10/10/2020',
        content: 'A defaultProps será usada para garantir que this.props.name tenha um valor caso não tenha sido especificado pelo componente pai',
        user: PropTypes.shape({
            username: 'dorkal',
        })

    })
}

Comment.propTypes = {
    comment: PropTypes.shape({
        natural_time: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        user: PropTypes.shape({
            username: PropTypes.string.isRequired,
            profile: PropTypes.shape({
                profile_image: PropTypes.string
            }),
        }).isRequired,
    }).isRequired,
}


export default Comment
