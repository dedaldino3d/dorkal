import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    flex: 1 1 auto;
    max-width: 400px;
    border: 1px solid rgb(56,68,77);
    padding: 1em;
    & > img {
        margin-right: 10px;
    }

`;

export const CommentHeader = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    & > div {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        flex: 1 1 auto;
    }

    & > button {
        flex: 0 1 auto;
    }
`

export const CommentContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: column nowrap;

    & > p {
        max-width: 100%;
        word-wrap: break-word;
    }
    & > div {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
    }

`

export default Container