import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch, Redirect, Link, useRouteMatch } from 'react-router-dom';
import { FaUsers, FaRegEye, FaUserFriends, FaChartLine } from 'react-icons/fa';
import { MdGroup, MdPersonAdd } from 'react-icons/md';

import Container, { InfoHeader, InfoSeg, ButtonsProfile, Bprofile} from './styles'
import Avatar from '../Avatar'
import Trending from '../Trending/presenter'
import Post from '../Post'
import ButtonFollow from '../ButtonFollow'
import Header from '../Header/presenter'
import SideBar from '../SideBar/presenter'
import Search from '../Search'
import Svg from '../Views';
import UserInfo from '../UserInfo'


const UserProfileForm = props => {
    const { path } = useRouteMatch();

    return (
        <Container>
            <Header/>
            <InfoHeader>
                <div>
                    <Avatar
                    tam={75}
                    alt={props.user.username}
                    source={ props.user.profile.profile_image || require('../../images/noPhoto.jpg')}
                    />
                    <div>
                        <span>{props.user.profile.full_name}</span>
                        <span>@{props.user.username}</span>
                        <span>Joined at {props.user.created_at}</span>
                    </div>
                </div>
                <ButtonFollow user={props.user}/>
            </InfoHeader>
            <InfoSeg>
                <div>
                    <Svg md number={props.user.followers_count} svg={<FaUsers/>} content='Followers'/>
                    <Svg md number={props.user.following_count} svg={<MdGroup/>} content='Following'/>
                </div>
                <div>
                    <Svg md number={props.user.friends_count} svg={<FaUserFriends/>}content='Friends'/>
                    <Svg md number={props.user.views} svg={<FaRegEye/>} content='Views'/>
                </div>                
            </InfoSeg>
            <Trending/>
            <ButtonsProfile>
                <Bprofile><Link to={`${path}/info`}>Feed Profile</Link></Bprofile>
                <Bprofile><Link to={`${path}/estatistcs`}><FaChartLine/>Estatistcs</Link></Bprofile>
                <Bprofile><Link to={`${path}/info`}>Info</Link></Bprofile>
            </ButtonsProfile>
            <Switch>
            <Route path={`${path}/info`} component={UserInfo}/>
            </Switch>
        </Container>
    )
}


UserProfileForm.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired,
        friends: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        profile: PropTypes.shape({
            profile_image: PropTypes.string,
            full_name: PropTypes.string,
        }),
        created_at: PropTypes.number.isRequired,
    })
}

export default UserProfileForm
