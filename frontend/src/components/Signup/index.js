import { connect } from 'react-redux'
import { authSignup} from '../../actions/user'
import Signup from './container'


const mapDispatchToProps = dispatch => {
    return {
        authSignup: data => {
            dispatch(authSignup(data))
        }
    };
};


export default connect(null, mapDispatchToProps)(Signup)