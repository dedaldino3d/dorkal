import styled from 'styled-components';




export const Container = styled.div`
    max-width: 300px;
    max-height: 3.1em;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    padding: 0.8em;
    margin: 3px;
`;

export const Form = styled.form`

    & > input {
        padding: 1em;
        border: 1px solid rgb(56,68,77);
        border-top-width: 30%;
        background-color: rgba(25,39,52) ;
        box-shadow: 0 0 3px 1px rgb(20,140,190);

        &:focus {
            border: 2px solid rgba(29,161,242,.5);
            transition: border .3s ease-in-out 0s;
        }
        &:hover {
            background-color: rgba(105,139,152,.2) ;
            transition: background-color .3s 100ms ease-in-out 0s;
        }

    }
`

export default Container