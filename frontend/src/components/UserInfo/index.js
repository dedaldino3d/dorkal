import { connect } from 'react-redux'
import UserInfo from './container'
import { editProfile }  from '../../actions/user'

const mapStateToProps = (state, ownProps) => {
    return {
        profile: state.user.userProfile.profile,
        isLoading: state.user.isLoading,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editProfile: data => dispatch(editProfile(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
