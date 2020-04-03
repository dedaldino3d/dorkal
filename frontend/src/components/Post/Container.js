import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'



export default class Post extends PureComponent {

    state = {
        showComments: false;
    }

    handleReactClick = event => {

    }

    handleShowComments = event => {
        this.setState( state => {
            showComments: !state.showComments,
        })
    }
    
    shouldComponentUpdate(nextProps, nextState){
    	if(this.props.post !== nextProps.post){
    		return true
    	}
    	if(this.props.post.comments !== nextProps.post.comments){
    		return true
    	}
    	if(this.props.post.user !== nextProps.post.user){
    		return true
    	}

    	return false
    }


    render() {
        return (
            <Post {...this.props} {...this.state}/>
        )
    }
}

