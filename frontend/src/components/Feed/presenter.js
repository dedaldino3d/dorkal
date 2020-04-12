import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header/presenter'
import Container from './styles'
import AddPost from '../AddPost'
import Trending from '../Trending/presenter'
import Post from '../Post'



export const Feed = props => {
    if(props.isLoading){
        return <h1>Loading...</h1>
    }else{
        return (
        <Container>
        <AddPost 
        placeholder="Add post..."
        />
        <Trending />
        <RenderFeed {...props} />
        </Container>)
    }
};


const RenderFeed = props => (
    props.feed.map( post => (
        <Post {...post} key={post.id} />
    ))
)



Feed.propTypes = {
    feed: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
}


export default Feed
