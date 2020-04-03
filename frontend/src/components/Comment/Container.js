import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentPresenter from './presenter'


export class Comment extends Component {

    static propTypes = {
    }

    shoundComponentUpdate(nextProps, nextState){
    	if(this.props.comment !== nextProps.comment){
    		return true
    	}
    	if(this.props.comment.user !== nextProps.comment.user){
    		return true
    	}
    	
    	return false
    }

    render() {
        return (
            <CommentPresenter {...this.props} />
        )
    }
}


export default Comment

