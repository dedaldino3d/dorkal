import { connect } from 'react-redux'
import Login from './container'
import { authLogin } from '../../actions/user'


const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => {
            dispatch(authLogin(username, password))
        }
    }
}

export default connect(null, mapDispatchToProps)(Login)
