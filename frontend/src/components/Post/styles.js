import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid rgb(56, 68, 77);
    border-radius: 10px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: .734em;
    padding-top: 1em;
    margin: .165em .3525em;
    max-width: 100%;
    flex: 1 1 6em;
    box-shadow: 0 0 10px 0 rgba(75, 79, 92, 0.7), inset 1px 1px 8px 0 rgb(75, 79, 92, 0.7);
    
    :hover {
        background-color: rgb(99,161,242, .1);
        transition: background-color .3s 100ms ease-in-out;
    }
    & img {
        flex: 1 1 0%;
        align-self: flex-start;
        margin-right: 10px;
    }
`;

export const HeaderPost = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    border-bottom: 1px solid rgb(56, 68, 77);
    max-width: 100%;
    overflow: hidden;
    padding-right: .7em;
    padding-bottom: .7em;
    line-height: 1.4;

    div {
        display: flex;
        flex-flow: column wrap;

        & span {
            font-size: .75em;
            color: rgb(136, 153, 166);
        }
    }
`;


export const ContentPost = styled.div`
    display: block;
    padding: 5px;
    word-wrap: break-word;
    word-break: break-all;
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    color: rgb(136, 153, 166);
    padding: 3px 2px 6px;
    font-size: .75em;
    margin-top: 1em;

    p {
        padding: 3px;
        margin-right: .1875em;
    }
`;

export const FooterPost = styled.div`
    border-top: 1px solid rgb(56, 68, 77);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
`

export const Button = styled.button`
    margin-left: 4px;
    margin-top: 4px;
    border: none;
    border-radius: 40px !important;
    padding: 1px 3px;
    padding-bottom: 2px;
    background-color: transparent;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    align-self: center;
    flex: 1 1 auto;
    line-height: 1.4;
    transition: background-color .3s ease-in-out 0s;
    color: rgb(136, 153, 166);

    & svg {
        margin-left: 3px;
    }

    :hover {
        background-color: #311c4a;
        & svg {
            transform: translateY(0);
            transition: transform .3s ease-in-out 0s;
        }
    }
`

export default Container