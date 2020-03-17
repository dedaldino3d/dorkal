import React from 'react'
import PropTypes from 'prop-types'

import Container, { HeaderPost, ContentPost, 
    Tags, FooterPost, Button } from './styles'
import Avatar from '../Avatar/avatar'

import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import { ButtonFollow } from '../general_components/buttonFollow';


export const Post = props => {
    return (
        <Container>
            <Avatar
            width={50}
            height={50}
            alt="Deni profile_image"
            source={require('../../images/noPhoto.jpg')}
            />
            <div>
                <HeaderPost>
                    <div>
                        <a href="#" >Dedaldino Antonio</a>
                        <span>20/03/2020</span>
                    </div>
                    <ButtonFollow/>
                </HeaderPost>
                <ContentPost>
                    <p>O PostgreSQL disponibiliza três abordagens distintas para correspondência com padrão: o operador LIKE tradicional do
SQL; o operador mais recente SIMILAR TO (adicionado ao SQL:1999); e as expressões regulares no estilo POSIX. Além
disso, também está disponível a função de correspondência com padrão substring, que utiliza expressões regulares tanto
no estilo SIMILAR TO quanto no estilo POSIX. 
                    </p>
                    <Tags>
                        <p>PostgreSQL</p>
                    </Tags>
                    <FooterPost>                    
                        <Button>{200}k<FaRegComment/></Button>
                        <Button>{1,3}M<FaRegHeart/></Button>
                        <Button>{56}M<FiShare2/></Button>
                    </FooterPost>
                </ContentPost>
            </div>
        </Container>
    )
}

// Post.propTypes = {
//     post: PropTypes.shape({
//         user: PropTypes.shape({
//             username: PropTypes.string.isRequired,
//             profile: PropTypes.shape({
//                 profile_image: PropTypes.string
//             })
//         }).isRequired,
//         comment_count: PropTypes.number.isRequired,
//         heart_count: PropTypes.number.isRequired,
//         joke_count: PropTypes.number.isRequired,
//         shares_count: PropTypes.number.isRequired,
//         created_at: PropTypes.number.isRequired,
//         tags: PropTypes.arrayOf(PropTypes.string).isRequired
//     }).isRequired
// }


export default Post
