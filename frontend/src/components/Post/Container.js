import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import PostForm from './presenter'


export class Post extends PureComponent {

    state = {
        showComments: false
    }

    static propTypes ={
        post: PropTypes.object,
    }

    render() {
        return (
            <PostForm {...this.props} {...this.state}/>
        )
    }
}


export default Post