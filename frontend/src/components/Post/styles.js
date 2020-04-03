import styled from 'styled-components';



// render all info inside post
export const ContainerPost = styled.div`
    border-radius: 10px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    flex: 1 1 6em;
    padding: .934em;
    padding-top: 1em;
    margin: .265em .3525em;
    max-width: 100%;
    box-shadow: var(--bs-lg) !important;
    background-color: var(--white);

    & > div {
        flex: 1 1 auto;
    }

    & > span {
        float: right;
        margin-right: 10px;
        color: var(--blue-60);
        cursor: pointer;
        
    }
`;

// header post
export const HeaderPost = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    padding-right: .7em;
    padding-bottom: .7em;
    line-height: 1.4;

    & > div {
        display: flex;
        flex-flow: row nowrap;

        div {

            margin-left: 10px;

            & span {
                font-size: .75em;
                color: var(--gray-60);
            }
            & > span:first-of-type {
                display: inline;
                margin-left: 5px;
            }
            & > span {
                display: block;
            }
        }
    }

    & > button {
        align-self: center;
    }
`;


// content post
export const ContentPost = styled.div`
    display: block;
    word-wrap: break-word;
    word-break: break-all;
    width: 100%;

    & > div:nth-of-type(2) {
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;
        align-items: center;
        padding: 1em 0 0.4em;
        & > svg {
            align-self: center;
        }
    }
`;





export const ImgPost = styled.div`
    max-width: 100%;
    margin: 10px 5px 1px;
    
    img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        cursor: pointer;
    }
`;


export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    color: var(--gray-60);
    font-size: .75em;

    p {
        padding: 3px;
        margin-right: .1875em;
    }
`;


export const FooterPost = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3px;
    padding: 4px 1px;
    
    & > span:nth-child(2){
        :hover {
            svg {
                color: var(--red);
            }
        }
    }   

    & > span:nth-child(3){
        :hover {
            svg {
                color: var(--yellow-80);
            }
        }
    }
`

export const Button = styled.span`
    margin-left: 4px;
    margin-top: 4px;
    border-radius: 40px !important;
    padding: 1px 3px;
    margin-bottom: -5px;
    background-color: transparent;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    align-self: center;
    max-width: 80px;
    line-height: 1.4;
    transition: background-color .3s ease-in-out 0s;
    color: var(--gray-60);
    cursor: pointer;

    & svg {
        margin-left: 3px;
    }
`

export default ContainerPost