import { connect } from 'react-redux'
import Login from './container'
import { login } from '../../actions/auth'


const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => {
            dispatch(login(username, password))
        }
    }
}

export default connect(null, mapDispatchToProps)(Login)
