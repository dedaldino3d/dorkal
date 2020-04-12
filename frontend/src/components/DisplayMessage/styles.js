import styled from 'styled-components';



export const Container = styled.div`
    width: 100%;
    position: relative;

    /* container for messages */
    & > div {
        padding: 10px;
        /* each two message: receiver and sender */
        & > div {
            padding: 13px;
        }
    }

`;


export const ReMessage = styled.div`
    display: flex;
    max-width: 100%;
    margin-bottom: 1em;
    color: var(--gray-80);

    & > img {
        margin-right: 10px;
    }

    & > div {
        background: var(--violet-90);
        color: var(--white);
    }
`;

export const SeMessage = styled.div`
    display: flex;
    max-width: 100%;
    color: var(--gray-80);
    margin-top: 1em;

    & > img {
        margin-left: 10px;
    }

    & > div {
        background: var(--blue-75);
        color: var(--gray-90);
    }
`;


export const Content = styled.div`
    padding: 10px 14px;
    flex-grow: 3;
    flex-shrink: 2;
    max-width: 100%;
    white-space: break-all;
    border-radius: 8px;
`;

export const FooterMessage = styled.footer`

    display: flex;
    justify-content: space-evenly;
    flex-flow: row nowrap;
    align-items: center;
    position: fixed;
    bottom: 0;
    max-height: 100px;
    width: 100%;
    background: var(--white);
    padding: 5px 10px;

    svg {
        font-size:  26px;
        flex: 1 0 auto;
        color: var(--violet);

        & + svg{
            margin-left: 4px;
        }
    }
    
    form {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        
        flex-shrink: 2;
        input[type=text] {
            padding: 10px 14px;
            margin: 0 5px;
            border-radius: 10px;
            border: 1px solid var(--border);
            flex-grow: 1;
            flex-shrink: 2;
            :focus {
                border-color: var(--blue-80);
                box-shadow: 0 0 4px var(--focus-ring);
            }
        }

        button {
            border: none;
            background: transparent;
        }
    }
`;


export default Container
