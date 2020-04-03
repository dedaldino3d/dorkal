import styled from 'styled-components';



export const Li = styled.li`
    display: flex;
    flex-flow: row nowrap;
    flex: 1 1 auto;
    width: 100%;
    border: none;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) !important;
    padding: .8em;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 10px !important;

    & > div {
        margin-left: 10px;
        width: 100%;
    }
`;

export const CommentHeader = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    overflow: hidden;
    padding-right: .7em;
    padding-bottom: .7em;
    line-height: 1.4;

    & > div {
        
        & > span:first-of-type {
            display: inline;
        }

        & span {
            font-size: .75em;
            color: rgb(136, 153, 166);
        }
        
        & > span {
            display: block;
        }
    }

    & > button {
        align-self: center;
    }
`;

export const CommentContent = styled.div`
    display: block;

    & > p {
        max-width: 100%;
        word-wrap: break-word;
        margin-bottom: 10px;
    }
    & > div {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        margin: 5px 0 2px 10px;
    }
`;

export default Li