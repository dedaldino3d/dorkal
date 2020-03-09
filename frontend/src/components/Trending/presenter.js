import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components';
import { MdLibraryAdd } from 'react-icons/md';
import { GoThumbsup } from 'react-icons/go';
import { FaRegEye } from 'react-icons/fa';

// Main component style for trending component
export const Container = styled.ul`

    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    max-height: 100%;
    margin: 2px;

    /* each element li inside current ul */
    & > li {
        position: relative;
        padding: 8px;
        height: 100%;
        flex: 1 0 140px;
        max-width: 180px;
        display: block;
        text-align: center;
        border: 1px solid #e2e2e2;
        border-radius: 6px;
        font-size: 14px;
        margin: 4px 2px;

/* second element div */
        & div:nth-child(2) {
            padding: 5px;
            width: 100%;
/* first element div on second element div on li */
            div:first-child {
                padding-bottom: 1.98em;
                
                /* all element a inside current element div (also children) */
                & a {
                    font-weight: bold;
                    :hover{text-decoration: underline;}
                    color: #444;
                    padding: 3px;
                    margin-bottom: 5px;
                }
                /* all elemet p inside current element div */
                & p {
                    text-align: center;
                    text-size-adjust: 100%;
                }
            }
/* second element div on second element div on li */
            div:nth-child(2) {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 8px;
                /* each sibling span inside current div */
                & > span {
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 12px;
                    color: #989898;
                    /* first element span inside current span */
                    span:first-child {
                        margin-right: 3px;
                    }
                }
            }
        }
    }
`;

// Button for trending, render 'see more'
const Button = styled.a`
    border-radius: 40px !important;
    border: 1px solid #ededed;
    background-color: #eaf4ff;
    color: #1486f3 !important;
    box-shadow: inset 0 0 0 1px 
    rgba(20,134,243,0.09) !important;
    padding:  8px 12px;
    font-size: 13px;
    align-self: center;
    font-weight: normal;
`;


export const Trending = props => {
    return (
        <Container>
            <li>
                <div>
                    <img src="#" />
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
                    <img src="#" />
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
                    <img src="#" />
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
                    <img src="#" />
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
                    <img src="#" />
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
                    <img src="#" />
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
                    <img src="#" />
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