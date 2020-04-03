import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding: .4em;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    width: 100%;
    min-height: 3em;
    max-height: 4em;
    z-index: 800;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid #ddd;
    box-shadow: 0 2px 15px 0 rgba(200,200,200, .7), 0 2px 10px 0 rgba(200,200,200, .7);
    overflow: hidden;
    
    & > div {
        flex: 0 1 auto;
        @media (max-width: 576px){
            flex: 1 1 auto;
        }
        height: 100%;
        z-index: 1;
        & a {
            color: #666;
            padding: .6em;
            font-size: 22px;
            line-height: 0;
            transition: background-color .8s ease-in-out;
            & svg {
                color: #8a00e6;
            }
            :hover {
                background-color: #9900f8;
                color: #fff;

                svg{
                    color: #fff;
                }
            }
        }
    }

`;


export default Container
