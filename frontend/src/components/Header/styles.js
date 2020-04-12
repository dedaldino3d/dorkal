import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding: .4em;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 100%;
    min-height: 3em;
    max-height: 4em;
    z-index: 800;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: var(--bs-gl);
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
                color: var(--violet);
                font-size: 18px;
            }
            :hover {
                background-color: var(--violet);
                color: var(--white);

                svg{
                    color: var(--white);
                }
            }
        }
    }

`;


export default Container
