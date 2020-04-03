import React from 'react'
import PropTypes from 'prop-types'

import Container, { Content, Footer, Li, ImgTrending} from './styles'
import Avatar from '../Avatar'
import { MdLibraryAdd } from 'react-icons/md';
import { GoThumbsup } from 'react-icons/go';
import { FaRegEye } from 'react-icons/fa';


export const Trending = props => (
    <Container>
        <Li>
            <Avatar 
            source={require("../../images/noPhoto.jpg")}
            tam={40}
            />
            {/*<ImgTrending
            src={require("../../images/noPhoto.jpg")}
            />*/}
            <Content>
                <span href="#">Titulo do trending 1</span>
                <p>Many years ago, when computers...</p>
            </Content>
            <Footer>
                <span>80k<GoThumbsup/></span>
                <span>12.2k<FaRegEye/></span>
            </Footer>
        </Li>
        <Li>
            <Avatar 
            source={require("../../images/ios.png")}
            tam={40}
            />
            {/*<ImgTrending
            src={require("../../images/noPhoto.jpg")}
            />*/}
            <Content>
                <span href="#">Titulo do trending 1</span>
                <p>Many years ago, when computers...</p>
            </Content>
            <Footer>
                <span>80k<GoThumbsup/></span>
                <span>12.2k<FaRegEye/></span>
            </Footer>
        </Li>
        <Li>
            <Avatar 
            source={require("../../images/android.png")}
            tam={40}
            />
            {/*<ImgTrending
            src={require("../../images/noPhoto.jpg")}
            />*/}
            <Content>
                <span href="#">Titulo do trending 1</span>
                <p>Many years ago, when computers...</p>
            </Content>
            <Footer>
                <span>80k<GoThumbsup/></span>
                <span>12.2k<FaRegEye/></span>
            </Footer>
        </Li>
    </Container>
)


export default Trending