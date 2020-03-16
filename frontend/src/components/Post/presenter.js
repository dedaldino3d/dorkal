import React from 'react'
import PropTypes from 'prop-types'

import Container, { HeaderPost, ContentPost, 
    Tags, FooterPost, Button } from './styles'
import Avatar from '../Avatar/avatar'

import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import { ButtonFollow } from '../general_components/buttonFollow';


export const Post = props => {
    return (
        <Container>
            <Avatar
            width={50}
            height={50}
            alt={`${props.post.user.username}_profile_image` ? 'deda': 'deni'}
            source={ props.post.user.profile.profile_image || require('../../images/noPhoto.jpg')}
            />
            <div>
                <HeaderPost>
                    <div>
                        <a href="#" >{props.post.user.profile.full_name}</a>
                        <span>{`@${props.post.user.username}`}</span>
                        <span>{props.post.natural_time}</span>
                    </div>
                    <ButtonFollow user={props.post.user}/>
                </HeaderPost>
                <ContentPost>
                    <p>{props.post.content}</p>
                    <Tags>
                        <p>{props.post.tags}</p>
                    </Tags>
                    <FooterPost>                    
                        <Button>{props.post.comment_count}<FaRegComment/></Button>
                        <Button>{props.post.heart_count}<FaRegHeart/></Button>
                        <Button>{props.post.shares_count}<FiShare2/></Button>
                    </FooterPost>
                </ContentPost>
            </div>
        </Container>
    )
}

Post.propTypes = {
    post: PropTypes.shape({
        user: PropTypes.shape({
            username: PropTypes.string.isRequired,
            profile: PropTypes.shape({
                profile_image: PropTypes.string
            })
        }).isRequired,
        comment_count: PropTypes.number.isRequired,
        heart_count: PropTypes.number.isRequired,
        joke_count: PropTypes.number.isRequired,
        shares_count: PropTypes.number.isRequired,
        created_at: PropTypes.number.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
}


export default Post
