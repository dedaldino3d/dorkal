import styled from 'styled-components';



export const Container = styled.div`
    background: #fafafa;
    width: 100%;
`;

export const Ul = styled.ul`

    padding: 10px;
    width: 100%;

    & > li {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px 5px;
        border-bottom: 1px solid var(--border);
        p {
            color: var(--gray-80);
        }
    }
`

export default Container