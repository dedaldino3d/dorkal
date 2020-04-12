import styled from 'styled-components';



export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    padding: .5em;
    max-width: 100%;
    border: none;
    margin: 4px;
    border-radius: 3px;

    & > input {
        padding: 10px;
        border: 1px solid var(--border);
        margin-left: 1em;
        border-radius: 10px;
        width: 80%;
    }
`;

export const Card= styled.div`

    border: none;
    border-radius: 10px;
    box-shadow: var(--bs-xl);
    padding: 14px 10px 0;
    margin: 0 10px;
    position: absolute;
    z-index: 1000;
    background: var(--white);

    @media screen and (min-width: 580px){
        min-width: 530px;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    line-height: 1.4;

    & > span:first-of-type {
        margin-left: 10px;
        font-size: 16px;
        font-weight: bold;
        flex-shrink: 2;
    }
    & > span:last-child {
        font-size: 13px;
        color: var(--gray-40);
        margin-left: 5px;
        flex-shrink: 2;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    width: 100%;
    margin-top: 8px;

    textarea {
        border: 1px solid var(--border);
        border-radius: 10px;
        padding: 8px 20px 0;
        overflow: hidden;
        resize: none;
        min-height: 100px;
        width: 100%;
    }

`;

export const DivSvg = styled.div`

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 150px;
    margin: 8px 0;

    svg {
        font-size: 22px;
        color: var(--violet);
        cursor: pointer;

        :hover{
            border-radius: 50%;
            background: var(--gray-10);
        }
    }
`;

export const Footer = styled.div`

    
    padding: 10px 14px;
    margin: 5px -10px -5px;
    border-top: 1px solid var(--border);

    div {
        float: right;

        & > button, & > span {
            border: none;
            padding: 4px 10px;
            border-radius: 8px;

        }
        & > button {
                margin-left: 8px;
                background: var(--violet-90);
                color: var(--white);
            }

        span:first-child{
            background: var(--gray-10);
            color: var(--gray-60);
            padding: 8px 10px;
            cursor: pointer;
            :hover{
                background: var(--gray-20);
            }
        }
    }
`;


export default Container