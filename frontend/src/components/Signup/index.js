import { connect } from 'react-redux'
import { authSignup} from '../../actions/user'
import Signup from './container'


const mapDispatchToProps = dispatch => {
    return {
        signup: data => {
            dispatch(signup(data))
        }
    };
};


export default connect(null, mapDispatchToProps)(Signup)
