import styled from 'styled-components';



export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    border: 1px solid var(--border);
    background: var(--white);
    overflow-Y: auto;

    & > div {
        display: flex;
        flex-flow: row nowrap;
        padding: 10px;
        width: 100%;
        align-items: center;
        margin: 5px 0;
        border-bottom: 1px solid #dadce0;

        :last-child {
            border: none;
        }
    }
`;


export const Content = styled.div`
    margin-left: 10px;
    width: 100%;

    & > p {
        color: var(--gray-40);
        font-size: 14px;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    a {
        margin-right: 5px;
        font-weight: bold;
        color: var(--gray-80);

        :hover, :active, :visited, :link {
            color: var(--gray-80);
        }
    }
`;



export default Container