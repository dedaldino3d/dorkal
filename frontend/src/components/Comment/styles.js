import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    min-width: 6em;
    max-width: 25em;
    width: 100%;
    padding: .7em;
    padding-bottom: 2px;
    margin: 3px;
    justify-content: center;
    border: 1px dashed #dedede;
    border-bottom: none;
    border-radius: 8px;

    & > div:first-child {
        margin-top: 12px;
    }
`;


export const CommentContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 3px;
    flex: 1 1 100%;

    & > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 6px;
        padding-bottom: 1px;
        a {
            margin-right: 5px;
        }
    }

    & div:nth-child(2) {
        font-size: 1em;
        color: #313131;
        padding-bottom: .6em;
    }

    & div:last-child {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        font-size: 1.4em;
        border-top: 1px solid #f1f1f1;
    }
`

export default Container