import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    max-width: 100%;
    margin: auto;
	/* padding-top: 5em; */
    @media (max-width: 31.25em){
        max-width: 100%;
        margin: .1875em auto;
    }
`;



export default Container