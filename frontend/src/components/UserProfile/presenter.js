import React from 'react'
import PropTypes from 'prop-types'

import Container, { InfoHeader, InfoSeg, AddUser} from './styles'

import Header from '../Header/presenter';
import Avatar from '../Avatar/avatar'
import Trending from '../Trending/presenter'
import Post from '../Post/presenter'
import AddPost from '../general_components/addPost'
import { FaUsers, FaRegEye, FaUserFriends } from 'react-icons/fa';
import { MdGroup, MdPersonAdd } from 'react-icons/md';
import Comment from '../Comment/presenter'
import CommentBox from '../CommentBox/presenter'


const UserProfileForm = props => {
    return (
        <Container>
            <Header/>
            <InfoHeader>
                <div>
                    <Avatar
                    width={65}
                    height={65}
                    source={require('../../images/noPhoto.jpg')}
                    />
                    <div>
                        <div>
                            <p>Dedaldino A.</p>
                            <p>@dedaldino3D</p>
                        </div>
                        <InfoSeg>
                            <p>154M<span><FaUsers/>Followers</span></p>
                            <p>12<span><MdGroup/>Following</span></p>
                            <p>1<span><FaUserFriends/>Friends</span></p>
                            <p>2B<span><FaRegEye/>Views</span></p>
                        </InfoSeg>
                    </div>
                </div>
                <AddUser>
                    <a><MdPersonAdd/></a>
                </AddUser>
            </InfoHeader>
            <Trending/>
            <AddPost
            placeholder="Make difference..."/>
            <Comment/>
            <CommentBox/>
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
