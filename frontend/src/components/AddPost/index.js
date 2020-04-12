import { connect } from "react-redux"
import * as postActions from '../../actions/posts'
import AddPost from "./container"



const mapStateToProps = (state, ownProps) => {
	const { user, isLoading } = state.user;
	
	return {
		user,
		isLoading
	}
}


const mapDispatchToProps = (dispatch, ownProps) => {
	
	return {
		submitPost: post => {
			dispatch(postActions.addPost(post))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(AddPost)