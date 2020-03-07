import React from 'react'
import PropTypes from 'prop-types'

import Container, { HeaderPost, ContentPost, 
    Tags, FooterPost } from './styles'
import Avatar from '../general_components/avatar'

import { GoThumbsup } from 'react-icons/go';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import { MdMoreVert } from 'react-icons/md';


export const Post = props => {
    return (
        <Container>
            <HeaderPost>
                <div>
                    <div>
                        <Avatar
                        width={45}
                        height={45}
                        source={props.images.user.profile.profile_image || require("images/noPhoto.jpg")}
                        />
                    </div>
                    <div>
                        <a href="#" >{props}</a>
                        <span>{props.images.user.username}</span>
                        <span>{props.images.created_at}</span>
                    </div>
                </div>
                <button><MdMoreVert/></button>
            </HeaderPost>
            <ContentPost>
                <p>{props.images.caption}
                </p>
                <Tags>
                    <p>@Python</p>
                    <p>@JavaScript</p>
                    <p>@Java</p>
                    <p>@C++</p>
                </Tags>
                <FooterPost>
                    <div>
                        <button>{props.images.like_count}<GoThumbsup/></button>
                        <button>{props.images.comment_count}<FaRegComment/></button>
                    </div>
                    <div>
                        <button><span>{props.images.heart_count}</span> <span><FaRegHeart/></span></button>
                        <button><span>{props.images.joke_count}</span> <span><FaRegHeart/></span></button>
                        <button><span>{props.images.shares_count}</span> <span><FiShare2/></span></button>
                    </div>
                </FooterPost>
            </ContentPost>
        </Container>
    )
}

Post.propTypes = {
    images: PropTypes.shape({
        user: PropTypes.shape({
            username: PropTypes.string.isRequired,
            profile: PropTypes.shape({
                profile_image: PropTypes.string
            })
        }).isRequired,
        like_count: PropTypes.number.isRequired,
        comment_count: PropTypes.number.isRequired,
        heart_count: PropTypes.number.isRequired,
        joke_count: PropTypes.number.isRequired,
        shares_count: PropTypes.number.isRequired,
        created_at: PropTypes.number.isRequired,
    }).isRequired
}

export default Post
