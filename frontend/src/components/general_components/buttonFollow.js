import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { followUser, unfollowUser } from '../../actions/user'


export const Button = styled.button`
border: 1px solid #6f1287;
color: #6f1287;
padding: 5px 15px;
background-color: transparent;
box-shadow: 0 0 10px 0 rgb(111, 18, 135, .3);
border-radius: 40px !important;
transition: background-color .3s ease-in-out;
height: 30px;
align-self: center;
font-weight: bold;

:hover {
    background-color: #6f1287;
    color: #fff;
}
`



export const ButtonFollow = props => {
    // if(props.user.is_self){
    //     return null;
    // }

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
        // onClick={handleClick}
        >
            {/* {props.user.following ? 'Unfollow': 'Follow'} */}
            Follow
        </Button>
    )
}

// ButtonFollow.propTypes = {
//     user: PropTypes.shape({
//         following: PropTypes.bool.isRequired,
//         user_id: PropTypes.number.isRequired,
//         is_self: PropTypes.bool.isRequired
//     }).isRequired
// }

export default ButtonFollow

// const mapDispatchToProps = dispatch => ({
//     followUser: user_id => dispatch(followUser(user_id)),
//     unFollowUser: user_id => dispatch(unfollowUser(user_id))
// })


// export default connect(null, mapDispatchToProps)(ButtonFollow)

