import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch, Redirect, Link, useRouteMatch } from 'react-router-dom';
import { FaUsers, FaRegEye, FaUserFriends } from 'react-icons/fa';
import { MdGroup, MdPersonAdd } from 'react-icons/md';

import Container, { InfoHeader, InfoSeg, ButtonsProfile, Bprofile} from './styles'
import Avatar from '../Avatar'
import Trending from '../Trending/presenter'
import Post from '../Post/presenter'
import ButtonFollow from '../ButtonFollow'
import Header from '../Header/presenter'
import SideBar from '../SideBar/presenter'
import Search from '../Search/presenter'
import SearchForm from '../SearchForm/presenter'
import Svg from '../Views';
import UserInfo from '../UserInfo/presenter'


const UserProfileForm = props => {
    const { path } = useRouteMatch();

    return (
        <Container>
            <Header/>
            <InfoHeader>
                <div>
                    <Avatar
                    tam={75}
                    source={require('../../images/noPhoto.jpg')}
                    />
                    <div>
                        <span>Dedaldino A.</span>
                        <span>@dedaldino3D</span>
                        <span>Joined at 20/2/2020</span>
                    </div>
                </div>
                <ButtonFollow/>
            </InfoHeader>
            <InfoSeg>
                <div>
                    <Svg md number='432M' svg={<FaUsers/>} content='Followers'/>
                    <Svg md number='21' svg={<MdGroup/>} content='Following'/>
                </div>
                <div>
                    <Svg md number='31' svg={<FaUserFriends/>}content='Friends'/>
                    <Svg md number='243k' svg={<FaRegEye/>} content='Views'/>
                </div>                
            </InfoSeg>
            <Trending/>
            <ButtonsProfile>
                <Bprofile><Link to={`${path}/info`}>Feed Profile</Link></Bprofile>
                <Bprofile><Link to={`${path}/estatistcs`}>Estatistcs</Link></Bprofile>
                <Bprofile><Link to={`${path}/info`}>Info</Link></Bprofile>
            </ButtonsProfile>
            <Switch>
            <Route path={`${path}/info`} component={UserInfo}/>
            <Route path={`${path}/estatistcs`} component={SearchForm}/>
            </Switch>
        </Container>
    )
}


UserProfileForm.propTypes = {

}

export default UserProfileForm
