import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { HashRouter as Router, Route, Switch, Redirect, Link, useRouteMatch } from 'react-router-dom';
import Container, { ContainerPost, HeaderPost, ContentPost, 
    Tags, FooterPost, Button, ImgPost} from './styles'
import Avatar from '../Avatar';
import { PostComments } from '../PostComments/container';
import CommentBox from '../CommentBox/presenter';
import Svg from '../Views';

import { FaRegComment, FaRegHeart, FaRegGrinSquintTears, FaRegEye } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import ButtonFollow from '../ButtonFollow/container';
import ListUsers from '../general_components/listUsers';



export const Post = props => (
    <ContainerPost>
        <HeaderPost>
            <div>
                <Link to='/profile'>
                <Avatar
                tam={50}
                alt={/*props.post.user.username*/'dedaldino'}
                source={/*props.post.user.profile.profile_image ||*/ require('../../images/noPhoto.jpg')}
                />
                </Link>
                <div>
                    <Link to="/profile" >{/*props.post.user.profile.full_name ||props.post.user.username */'dedaldino'}</Link>
                    <span>{/*props.post.natural_time*/ '20/20/2020'}</span>
                    <span>{/*props.post.user.username*/'dedaldino'}</span>
                    <span>@location</span>
                </div>
            </div>
            <ButtonFollow user={/*props.post.user*/ false}/>
        </HeaderPost>
        <ContentPost>
            <p>We could not find what you were looking for.
                Please contact the owner of the site that linked you to the original URL and let them know their link is broken.</p>
            <ImgPost>
                <img src={require('../../images/ios.png')}/>
            </ImgPost>
            <div>
                <Tags>
                    {/*props.post.tags.map( tag => (
                        <p>{tag}</p>
                    ))*/}
                    <p>Machine Learning</p>
                    <p>python</p>
                    <p>javascript</p>
                    <p>c++</p>
                </Tags>
                <Svg md number='965k' svg={<FaRegEye/>}/> 
            </div>
            <ListUsers
            tam={20}
            />
            <FooterPost>                    
                <Button>{/*props.post.comment_count*/ 2345}<FaRegComment/></Button>
                <Button>{/*props.post.is_liked*/ 200}M<FaRegHeart/></Button>
                <Button>{/*props.post.is_liked*/ 200}M<FaRegGrinSquintTears/></Button>
                <Button>{/*props.post.share_count*/ 345}<FiShare2/></Button>
            </FooterPost>
        </ContentPost>
        
    </ContainerPost>
)


Post.defaultProps = {
    post: PropTypes.shape({
        id: 4,
        location: 'Luanda, Angola',
        like_count: 2034,
        share_count: 234,
        content: 'A defaultProps será usada para garantir que this.props.name tenha um valor caso não tenha sido especificado pelo componente pai',
        natural_time: '30/04/2020',
        comment_count: 54,
        tags: ['Machine Learning', 'python', 'javascript','c++'],
        user: PropTypes.shape({
            username: 'dedaldino'
        }),
    }),
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    like_count: PropTypes.number.isRequired,
    share_count: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    natural_time: PropTypes.string.isRequired,
    is_liked: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      profile: PropTypes.shape({
          profile_image: PropTypes.string,
      }),
      username: PropTypes.string.isRequired
    }).isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        user: PropTypes.shape({
          profile: PropTypes.shape({
              profile_image: PropTypes.string
          }),
          username: PropTypes.string.isRequired
        }).isRequired
      })
    ).isRequired,
  }).isRequired,
  showComments: PropTypes.bool,
  handleShowComments: PropTypes.func,
};



export default Post
