import { connect } from 'react-redux'
import Post from './container'

const mapStateToProps = (state, ownProps) => {
	
    const { user: {user} } = state;

	console.log("Teste User State: ", user);
	
    return {
        user,
    }
}


export default connect(mapStateToProps)(Post)
