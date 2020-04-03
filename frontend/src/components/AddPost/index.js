import { connect } from "react-redux"
import * as postActions from '../../actions/posts'
import AddPost from "./container"



const mapStateToProps = (state, ownProps) => {
	const { user: { user }} = state;
	console.log("Usuario state:",user)
	return {
		user
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