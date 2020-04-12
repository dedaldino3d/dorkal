import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentPresenter from './presenter'


export class Comment extends Component {

    static propTypes = {
    }


    render() {
        return (
            <CommentPresenter {...this.props} />
        )
    }
}


export default Comment

