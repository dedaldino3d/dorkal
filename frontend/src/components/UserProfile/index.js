import { connect } from 'react-redux'
import UserProfile from './container'
import { profile } from '../../actions/user'


const mapStateToProps = (state, ownProps) => ({
    user: state.user.userProfile,
    isLoading: state.user.isLoading,
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getProfile: username => dispatch(profile(username)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
