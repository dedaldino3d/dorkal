import React from 'react'
import PropTypes from 'prop-types'

import Container, { Ul} from './styles'
import Timestamp from '../Timestamp'
import Header from '../Header/presenter'



export const Notifications = props => {
    return (
        <>
        <Header/>
        <Container>
            <Ul>
                <li>
                    <p>Andreza Veredin visitou o seu perfil</p>
                    <Timestamp time="now" />
                </li>
                <li>
                    <p>Mark Zuckerberg tentou enviar-te uma mensagem</p>
                    <Timestamp time="4 days ago" />
                </li>
                <li>
                    <p>Jeff Bezos visitou o seu perfil</p>
                    <Timestamp time="4 days ago" />
                </li>
                <li>
                    <p>Elon Musk enviou uma nova mensagem</p>
                    <Timestamp time="8 hours ago" />
                </li>
                <li>
                    <p>Bill gates está a seguir-te</p>
                    <Timestamp time="9 min ago" />
                </li>
                <li>
                    <p>Jeff Bezos visitou o seu perfil</p>
                    <Timestamp time="4 day ago" />
                </li>
                <li>
                    <p>Dedaldino Antonio atingiste a marca dos 200m de seguidores</p>
                    <Timestamp time="1 week ago" />
                </li>
                <li>
                    <p>Marquela Queronzo visitou o seu perfil</p>
                    <Timestamp time="10 days ago" />
                </li>
                <li>
                    <p>Mark Zuckerberg tentou enviar-te uma mensagem</p>
                    <Timestamp time="4 days ago" />
                </li>
                <li>
                    <p>Elon Musk enviou uma nova mensagem</p>
                    <Timestamp time="8 hours ago" />
                </li>
                <li>
                    <p>Elon Musk enviou uma nova mensagem</p>
                    <Timestamp time="1 day ago" />
                </li>
                <li>
                    <p>Mark Zuckerberg tentou enviar-te uma mensagem</p>
                    <Timestamp time="4 days ago" />
                </li>
                <li>
                    <p>Jeff Bezos visitou o seu perfil</p>
                    <Timestamp time="4 days ago" />
                </li>
                <li>
                    <p>Elon Musk enviou uma nova mensagem</p>
                    <Timestamp time="3 days ago" />
                </li>
            </Ul>
        </Container>
        </>
    )
}


Notifications.propTypes = {

}


export default Notifications
