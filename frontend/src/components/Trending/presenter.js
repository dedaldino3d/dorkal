import React from 'react'
import PropTypes from 'prop-types'

import Container, { Button } from './styles'
import Avatar from '../Avatar/avatar'
import { MdLibraryAdd } from 'react-icons/md';
import { GoThumbsup } from 'react-icons/go';
import { FaRegEye } from 'react-icons/fa';


export const Trending = props => {
    return (
        <Container>
            <li>
                <div>
                    <Avatar 
                    source={require("../../images/noPhoto.jpg")}
                    width={40}
                    height={40}
                    />
                </div>
                <div>
                    <div>
                        <a href="#">Titulo do trending 1</a>
                        <p>Many years ago, when computers supported 
                            maximum 256 different colors.
                        </p>
                    </div>
                    <div>
                        <span><span>80k</span><GoThumbsup/></span>
                        <span><span>12.2k</span> <FaRegEye/></span>
                    </div>
                    <Button href="#" type="button">
                        <span><MdLibraryAdd/> See more</span>
                    </Button>
                </div>
            </li>
            <li>
                <div>
                    <Avatar 
                    source={require("../../images/noPhoto.jpg")}
                    width={40}
                    height={40}
                    />
                </div>
                <div>
                    <div>
                        <a href="#">Titulo do trending 1</a>
                        <p>Many years ago, when computers supported 
                            maximum 256 different colors.
                        </p>
                    </div>
                    <div>
                        <span><span>80k</span><GoThumbsup/></span>
                        <span><span>12.2k</span> <FaRegEye/></span>
                    </div>
                    <Button href="#" type="button">
                        <span><MdLibraryAdd/> See more</span>
                    </Button>
                </div>
            </li>
            <li>
                <div>
                    <Avatar 
                    source={require("../../images/noPhoto.jpg")}
                    width={40}
                    height={40}
                    />
                </div>
                <div>
                    <div>
                        <a href="#">Titulo do trending 1</a>
                        <p>Many years ago, when computers supported 
                            maximum 256 different colors.
                        </p>
                    </div>
                    <div>
                        <span><span>80k</span><GoThumbsup/></span>
                        <span><span>12.2k</span> <FaRegEye/></span>
                    </div>
                    <Button href="#" type="button">
                        <span><MdLibraryAdd/> See more</span>
                    </Button>
                </div>
            </li>
            <li>
                <div>
                    <Avatar 
                    source={require("../../images/noPhoto.jpg")}
                    width={40}
                    height={40}
                    />
                </div>
                <div>
                    <div>
                        <a href="#">Titulo do trending 1</a>
                        <p>Many years ago, when computers supported 
                            maximum 256 different colors.
                        </p>
                    </div>
                    <div>
                        <span><span>80k</span><GoThumbsup/></span>
                        <span><span>12.2k</span> <FaRegEye/></span>
                    </div>
                    <Button href="#" type="button">
                        <span><MdLibraryAdd/> See more</span>
                    </Button>
                </div>
            </li>
            <li>
                <div>
                    <Avatar 
                    source={require("../../images/noPhoto.jpg")}
                    width={40}
                    height={40}
                    />
                </div>
                <div>
                    <div>
                        <a href="#">Titulo do trending 1</a>
                        <p>Many years ago, when computers supported 
                            maximum 256 different colors.
                        </p>
                    </div>
                    <div>
                        <span><span>80k</span><GoThumbsup/></span>
                        <span><span>12.2k</span> <FaRegEye/></span>
                    </div>
                    <Button href="#" type="button">
                        <span><MdLibraryAdd/> See more</span>
                    </Button>
                </div>
            </li>
            <li>
                <div>
                    <Avatar 
                    source={require("../../images/noPhoto.jpg")}
                    width={40}
                    height={40}
                    />
                </div>
                <div>
                    <div>
                        <a href="#">Titulo do trending 1</a>
                        <p>Many years ago, when computers supported 
                            maximum 256 different colors.
                        </p>
                    </div>
                    <div>
                        <span><span>80k</span><GoThumbsup/></span>
                        <span><span>12.2k</span> <FaRegEye/></span>
                    </div>
                    <Button href="#" type="button">
                        <span><MdLibraryAdd/> See more</span>
                    </Button>
                </div>
            </li>
            <li>
                <div>
                    <Avatar 
                    source={require("../../images/noPhoto.jpg")}
                    width={40}
                    height={40}
                    />
                </div>
                <div>
                    <div>
                        <a href="#">Titulo do trending 1</a>
                        <p>Many years ago, when computers supported 
                            maximum 256 different colors.
                        </p>
                    </div>
                    <div>
                        <span><span>80k</span><GoThumbsup/></span>
                        <span><span>12.2k</span> <FaRegEye/></span>
                    </div>
                    <Button href="#" type="button">
                        <span><MdLibraryAdd/> See more</span>
                    </Button>
                </div>
            </li>
        </Container>
    )
}


export default Trending