import React, { PureComponent} from 'react'
import PropTypes from 'prop-types'
import Button from './styles'


export const ButtonFollow = props => {
    
    if(props.user.is_self){
        return null;
    }

    const handleClick = event => {
        event.preventDefault();
        if(props.user.following){
            props.unFollowUser(props.user.user_id)
        }else {
            props.followUser(props.user.user_id)
        }
    }

    return (
        <Button
        onClick={handleClick}
        >
            {props.user.following ? 'Unfollow': 'Follow'}
        </Button>
    )
}

ButtonFollow.defaultProps = {
    user: PropTypes.shape({
        user_id: 1,
        following: false
    })
}

ButtonFollow.propTypes = {
    user: PropTypes.shape({
        following: PropTypes.bool.isRequired,
        user_id: PropTypes.number.isRequired,
        is_self: PropTypes.bool.isRequired
    }).isRequired
}


export default ButtonFollow