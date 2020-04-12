import { connect } from 'react-redux'
import { signup} from '../../actions/auth'
import Signup from './container'


const mapStateToProps = (state, ownProps) => {
    const { isAuthenticated, isLoading } = state.auth;

    return {
        isAuthenticated,
        isLoading,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        signup: data => {
            dispatch(signup(data))
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Signup)
