import { connect } from 'react-redux'
import CommentBox from './container'
import * as postActions from '../../actions/posts'


const mapStateToProps = (state, ownProps) => {
	const { user: {user} } = state;
	
    return {
        user,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submitComment: content => {
            dispatch(postActions.commentOnPost(ownProps.post_id, content))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox)
