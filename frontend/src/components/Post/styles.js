import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid #ededed;
    border-radius: 8px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 5px;
    margin: .125em .3125em;
    max-width: 100%;
    flex: 1 1 6em;

    @media (min-width: 36em){
        max-width: 36em;
        margin: .1875em auto;
    }
`;

export const HeaderPost = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: .5em;
    border-bottom: 1px solid #f5f5f5;
    width: 100%;
    background-color: #fafafa;
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
                color: #888;
            }
        }
    }

    button {
        background-color: transparent;
        border: none;
        border-radius: 40px !important;
        padding: 10px 13px 8px;
        font-size: 1.5em;
        
        &:hover {
            background-color: #f8f8f8;
        }
    }
`;

export const ContentPost = styled.div`
    display: block;
    padding: 5px;
    & > p {
        color: #0f0f0f;
        padding-bottom: 1em;
    }
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    color: #777;
    padding: 3px 2px 6px;
    font-size: .75em;
    p {
        padding: 3px;
        margin-right: .1875em;
    }
`;

export const FooterPost = styled.div`
    border-top: 1px solid #f2f2f2;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    & > div {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        color: #666;
        margin-bottom: -5px;
        & button {
            margin-left: 4px;
            margin-top: 4px;
            border: none;
            border-radius: 40px !important;
            padding: 6px 10px;
            padding-bottom: 2px;
            background-color: inherit;
            span:first-child {
                font-size: .7em;
                font-weight: bold;
            }
            span:last-child {
                font-size: 1.5em;
                /* color: #4d94ff; */
            }
            :hover {
                background-color: #ddd;
            }
            :first-child {
                margin-left: 0;
            }
        }
    }
`


export default Container