import React from 'react'
import PropTypes from 'prop-types'

import Container, { HeaderPost, ContentPost, 
    Tags, FooterPost, Button, BFollow } from './styles'
import Avatar from '../Avatar/avatar'

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
                        // source={props.images.user.profile.profile_image || require('../../images/noPhoto.jpg')}
                        source={require('../../images/noPhoto.jpg')}
                        />
                    </div>
                    <div>
                        <a href="#" >Dedaldino A.</a>
                        <span>dedaldino3D</span>
                        <span>10/03/2020</span>
                    </div>
                </div>
                <BFollow>Follow</BFollow>
            </HeaderPost>
            <ContentPost>
                <p>Isso depende do fato de que uma margem definida como 
                    'auto' em um contêiner flexível absorve espaço extra. Portanto, 
                    definir uma margem vertical autotornará o item perfeitamente centralizado nos dois eixos.
                </p>
                <Tags>
                    <p>@Python</p>
                    <p>@JavaScript</p>
                    <p>@Java</p>
                    <p>@C++</p>
                </Tags>
                <FooterPost>                    
                    <Button>12k<GoThumbsup/></Button>
                    <Button>4k<FaRegComment/></Button>
                    <Button>1.5k<FaRegHeart/></Button>
                    <Button>129k<FaRegHeart/></Button>
                    <Button>541k<FiShare2/></Button>
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
