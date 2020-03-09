import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-flow: row wrap;
    border: 1px solid #989898;
    border-radius: 10px;
    padding: 15px;
    max-width: 28%;
    min-height: 50%;
    
    @media (max-width: 36em){
        display: none;
    }

`;

export default Container