import React from 'react'
import PropTypes from 'prop-types'
import { MdCameraAlt, MdImage } from 'react-icons/md'
import { IoMdImages } from 'react-icons/io'
import { FaPaperPlane } from 'react-icons/fa'
import Avatar from '../Avatar'
import Header from '../Header/presenter'
import Container, { FooterMessage, ReMessage, SeMessage, Content } from './styles'



export const DisplayMessage = props => {

    const messages = [1,2,3,4,5,6,7,8,9,10];

    return (
        <>
        <Header/>
        <Container>
            <div>
                {messages.map(m => (
                <div key={m}>
                    <ReMessage>
                        <Avatar
                        tam={45}
                        alt={/*props.post.user.username*/'dedaldino'}
                        source={/*props.post.user.profile.profile_image ||*/ require('../../images/noPhoto.jpg')}
                        />
                        <Content>
                            A Torch usa o Cloud Storage e o Google Cloud Firestore para criar 
                            uma plataforma de design de RA colaborativo para aplicativos móveis e apps para tablet.
                        </Content>
                    </ReMessage>
                    <SeMessage>
                        <Content>
                        Precisávamos de uma nova arquitetura para solucionar os problemas de 
                        escalonamento vertical rápido e também para melhorar nossa velocidade de entrega.
                        </Content>
                        <Avatar
                        tam={45}
                        alt={/*props.post.user.username*/'dedaldino'}
                        source={/*props.post.user.profile.profile_image ||*/ require('../../images/noPhoto.jpg')}
                        />
                    </SeMessage>
                </div>))}
            </div>
            <FooterMessage>
                <MdCameraAlt/>
                <IoMdImages/>
                <form>
                    <input type="text" placeholder="Message"/>
                    <button type="submit" ><FaPaperPlane/></button>
                </form>
            </FooterMessage>
        </Container>
        </>
    )
}



export default DisplayMessage