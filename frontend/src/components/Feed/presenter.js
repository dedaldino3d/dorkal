import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header/presenter'
import Container from './styles'
import AddPost from '../AddPost/presenter'
import Trending from '../Trending/presenter'
import Post from '../Post/presenter'



export const Feed = props => (
    <Container>
        <Header />
        <AddPost 
        placeholder="Add post..."
        />
        <Trending />
        {props.isLoading ? <h1>Loading Page, data still arrive...</h1> : <RenderFeed {...props} />}
    </Container>
);


const RenderFeed = props => (
    <>
    {props.feed.map( post => (
        <Post post={post} key={post.id} />
    ))}
    </>
)


Feed.defaultProps = {
    feed: [1,2,3,4,5],
    isLoading: false
}

Feed.propTypes = {
    feed: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
}


export default Feed
