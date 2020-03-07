import React from 'react'
import PropTypes from 'prop-types'

import Container, { InfoHeader, InfoSeg } from './styles'

import Header from '../Header/presenter';
import Avatar from '../general_components/avatar'
import Trending from '../Trending/presenter'
import Post from '../Post/presenter'
import AddPost from '../general_components/addPost'
import { FaUsers, FaRegEye, FaUserFriends } from 'react-icons/fa';
import { MdGroup, MdPersonAdd } from 'react-icons/md';


const UserProfileForm = props => {
    return (
        <Container>
            <Header/>
            <InfoHeader>

                <div>
                    <Avatar
                    width={55}
                    height={55}
                    source="#"
                    />
                    <div>
                        <div>
                            <p>Name</p>
                            <p>@username</p>
                        </div>
                        <InfoSeg>
                            <p><FaUsers/><span>Followers</span></p>
                            <p><MdGroup/><span>Following</span></p>
                            <p><FaUserFriends/><span>Friends</span></p>
                            <p><FaRegEye/><span>Views</span></p>
                        </InfoSeg>
                    </div>
                </div>
                <button>
                    <MdPersonAdd/>
                </button>
            </InfoHeader>
            <Trending/>
            <AddPost
            placeholder="Make difference..."/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Container>
    )
}

UserProfileForm.propTypes = {

}

export default UserProfileForm
