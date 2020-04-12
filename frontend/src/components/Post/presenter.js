import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { HashRouter as Router, Route, Switch, Redirect, Link, useRouteMatch } from 'react-router-dom';
import Container, { ContainerPost, HeaderPost, ContentPost, 
    Tags, FooterPost, Button, ImgPost} from './styles'
import Avatar from '../Avatar';
import { PostComments } from '../PostComments';
import CommentBox from '../CommentBox';
import Svg from '../Views';

import { FaRegComment, FaRegHeart, FaRegGrinSquintTears, FaRegEye } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';
import { FiShare2 } from 'react-icons/fi';
import ButtonFollow from '../ButtonFollow';
import ListUsers from '../general_components/listUsers';
import Timestamp from '../Timestamp'


export const Post = props => (
    <ContainerPost>
        <HeaderPost>
            <div>
                <Link to='/profile'>
                <Avatar
                tam={50}
                alt={props.user.username}
                source={props.user.profile.profile_image || require('../../images/noPhoto.jpg')}
                />
                </Link>
                <div>
                    <Link to="/profile" >{props.user.profile.full_name || props.user.username }</Link>
                    <GoPrimitiveDot/>
                    <Timestamp time={props.natural_time} />
                    <Timestamp time={props.user.username}/>
                    <span>@location</span>
                </div>
            </div>
            <ButtonFollow user={props.user}/>
        </HeaderPost>
        <ContentPost>
            <p>{props.content}</p>
            <ImgPost>
                <img src={ props.file || require('../../images/noPhoto.jpg')}/>
            </ImgPost>
            <div>
                <Tags>
                    {props.tags.map( tag => (
                        <p>{tag}</p>
                    ))}
                </Tags>
                <Svg md number={props.views || 0} svg={<FaRegEye/>}/> 
            </div>
            <ListUsers
            tam={20}
            />
            <FooterPost>                    
                <Button onClick={props.handleShowComments}><span>{props.comment_count}</span><FaRegComment/></Button>
                <Button onClick={props.handleReactLoveClick}><span>{props.react_love_count}</span>{props.is_reacted_type === "love" ? <FaRegEye/>:<FaRegHeart/>}</Button>
                <Button onClick={props.handleReactJokeClick}><span>{props.react_joke_count}</span>{props.is_reacted_type === "joke" ? <FaRegEye/>:<FaRegGrinSquintTears/>}</Button>
                <Button onClick={props.handleShareClick}><span>{props.share_count}</span><FiShare2/></Button>
            </FooterPost>
        </ContentPost>
        
    </ContainerPost>
)


Post.propTypes = {
    id: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    react_joke_count: PropTypes.number.isRequired,
    react_love_count: PropTypes.number.isRequired,
    share_count: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    natural_time: PropTypes.string.isRequired,
    is_reacted_type: PropTypes.string.isRequired,
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
    handleReactJokeClick: PropTypes.func.isRequired,
    handleReactLoveClick: PropTypes.func.isRequired,
    handleShareClick: PropTypes.func.isRequired,
    handleShowComments: PropTypes.func.isRequired,
};


export default Post
