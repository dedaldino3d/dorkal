import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid #989898;
    border-radius: 8px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 5px;
    margin: .165em .3525em;
    max-width: 100%;
    flex: 1 1 6em;
    box-shadow: 0 0 10px 0 rgba(75, 79, 92, 0.7), inset 1px 1px 8px 0 rgb(75, 79, 92, 0.7);
`;

export const HeaderPost = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: .5em;
    border-bottom: 0.002em solid #989898;
    width: 100%;
    max-height: 6em;
    overflow: hidden;
    
    div {
        display: flex;
        flex-direction: row;
        align-items: flex-start;

        div {
            margin-left: .625em;
            display: flex;
            flex-flow: column wrap;

            span:first-of-type {
                color: green;
            }
            span {
                font-size: .75em;
                color: #fafafa;
            }
        }
    }
`;

export const BFollow = styled.button`
    border: 1px solid #6f1287;
    color: #6f1287;
    padding: 5px 15px;
    background-color: transparent;
    box-shadow: 0 0 10px 0 rgb(111, 18, 135, .3);
    border-radius: 10px;
    transition: background-color .3s ease-in-out;
    height: 30px;
    align-self: center;
    :hover {
        background-color: #6f1287;
        color: #fff;
        font-weight: bold;
    }
`

export const ContentPost = styled.div`
    display: block;
    padding: 5px;
    word-wrap: break-word;
    word-break: break-all;
    & > p {
        padding-bottom: 1em;
    }
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    color: #ededed;
    padding: 3px 2px 6px;
    font-size: .75em;
    p {
        padding: 3px;
        margin-right: .1875em;
    }
`;

export const FooterPost = styled.div`
    border-top: 0.002em solid #989898;
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
    flex: 1 1 auto;
    line-height: 1.4;
    transition: background-color .3s ease-in-out;
    color: #67707e;

    & svg {
        margin-left: 3px;
    }

    :hover {
        background-color: #311c4a;
        & svg {
            transform: scaleY(2);
            transition: transform .6s ease-in-out;
        }
    }
`

export default Container