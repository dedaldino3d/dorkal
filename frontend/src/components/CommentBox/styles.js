import styled from 'styled-components';




export const Container = styled.div`
    width: 100%;
    max-height: 3.1em;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    padding: 0.8em;
    margin: 3px;
`;

export const Form = styled.form`
    flex: 1 1 auto;        
    margin-left: 10px;

    & > input {
        padding: .5em;
        border: 1px solid rgb(56,68,77);
        background-color: rgba(25,39,52) ;
        border-radius: 40px !important;

        &:focus {
            border: 1px solid rgba(29,161,242,.5);
            border-radius: 40px;
            transition: border .3s ease-in-out 0s;
        }
        &:hover {
        }

    }
`

export default Container