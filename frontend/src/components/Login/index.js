import { connect } from 'react-redux'
import Login from './container'
import { login } from '../../actions/auth'


const mapStateToProps = (state, ownProps) => {
    const { isAuthenticated, isLoading } = state.auth;

    return {
        isAuthenticated,
        isLoading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => {
            dispatch(login(username, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
