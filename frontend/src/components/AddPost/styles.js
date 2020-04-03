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

`;

export const Form = styled.form`
    display: flex;
    flex: 1 1 auto;
    height: 100%;

    textarea {
        flex: 3 1 auto;
        border: none;
        border-radius: 40px;
        padding: 8px 20px 0;
        overflow: hidden;
        margin-right: 5px;
        margin-left: 5px;
        resize: none;
        height: 60px;
        width: 100%;
        box-sizing: border-box;        
        z-index: 5;
        font-family: sans-serif;
        font-weight: medium;
        box-shadow: var(--bs-md);
        ::placeholder{
            text-align: center;
        }
    }
`;

export const Button = styled.button`
    align-self: center;
    border: none;
    background-color: var(--violet);
    color: var(--white);
    border-radius: 10px;
    border: none;
    padding: 10px;
    flex: 1 1 40px;
    box-shadow: var(--bs-inset);
    transition: background-color .3s, color .3s ease-in-out 0s;
    cursor: pointer;
    :hover{
        color: var(--white);
        background-color: var(--violet-80);
    }
`;



export default Container