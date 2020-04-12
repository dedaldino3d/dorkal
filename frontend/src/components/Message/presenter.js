import React from 'react'
import PropTypes from 'prop-types'
import Container, { Header, Content } from './styles'
import MainHeader from '../Header/presenter'
import Avatar from '../Avatar'
import Timestamp from '../Timestamp'
import { Link } from 'react-router-dom'


export const Message = props => {
    const messages = [1,2,3,4,5,6,7,8,9,10,11,12];

    return (
        <>
        <MainHeader/>
        <Container>
            {messages.map(m => (
                <div key={m}>
                    <Avatar
                    tam={45}
                    alt={/*props.post.user.username*/'dedaldino'}
                    source={/*props.post.user.profile.profile_image ||*/ require('../../images/noPhoto.jpg')}
                    />
                    <Content>
                        <Header>
                            <div>
                                <Link to="/displaymessage">Dedaldino</Link>
                                <Timestamp time="@dedaldino" />
                            </div>
                            <Timestamp time="4 april" />
                        </Header>
                        <p>Eu sei que irei conseguir, apesar...</p>
                    </Content>
                </div>
            ))}
        </Container>
        </>
    )
}


Message.propTypes = {

}


export default Message
