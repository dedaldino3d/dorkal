import { connect } from 'react-redux'
import { followUser, unfollowUser } from '../../actions/user'
import ButtonFollow from './container'



const mapDispatchToProps = dispatch => ({
    followUser: user_id => dispatch(followUser(user_id)),
    unFollowUser: user_id => dispatch(unfollowUser(user_id))
})


export default connect(null, mapDispatchToProps)(ButtonFollow)
