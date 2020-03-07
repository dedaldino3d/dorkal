import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from '../Header/presenter'

import Container from './styles'
import AddPost from '../general_components/addPost'
import Trending from '../Trending/presenter'

export class Feed extends Component {

    static propTypes = {

    }

    render() {
        return (
            <Container>
                <Header />
                <AddPost 
                placeholder="Add post..."
                name="Post"
                buttonName="Post"
                src="#"
                />
                <Trending />
            </Container>
        )
    }
}

export default Feed
