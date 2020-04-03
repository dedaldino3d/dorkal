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
        padding: .8em;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) !important;
        border: none;
        border-radius: 40px !important;
        width: 100%;
        &:focus {
            box-shadow: 0px 1px 4px 0 rgba(153,0,230,.45), 0px 1px 10px 0 rgba(153,0,230,.33) !important;
            border-radius: 40px;
            transition: border .3s ease-in-out 0s;
        }
        &:hover {
        }

    }
`

export default Container