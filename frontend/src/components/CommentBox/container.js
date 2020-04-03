import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CommentBoxPresenter from './presenter'



export class CommentBox extends PureComponent {

    state = {
        content: "",
        isLoading: true
    }

    static propTypes = {
        post_id: PropTypes.number.isRequired,
        submitComment: PropTypes.func.isRequired
    }

    _handleInputChange = event => {
        const { target: { value }} = event;

        this.setState({
            content: value,
        });
    }

    _handleKeyPress = event => {
        const { content } = this.state;
        const { submitComment } = this.props;
        const { key } = event;
        if(key === "Enter"){
            event.preventDefault();
            submitComment(content);
            this.setState({
                content: ""
            })
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user){
            this.setState({
                isLoading: false
            });
        }
    };
    

    render() {
        const { user } = this.props;
        const { isLoading, content } = this.state;

        return (
            <CommentBoxPresenter
            handleInputChange={this._handleInputChange}
            handleKeyPress = {this._handleKeyPress}
            content={content}
            user = {user}
            />
        )
    }
}

export default CommentBox
