import styled from 'styled-components';




export const Container = styled.div`

    width: 100%;

    & > div:first-child {
        line-height: 10px;
        
        div {

            h1 {
                font-size: 16px;
                margin-left: -1em;
            }

            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            font-size: 16px;
            
        }

        & > div:first-child {
            display: block;
            padding-left: 1em;
        }

        & > div:last-child {
            a {
                :hover {
                    background: var(--red-70);
                    color: #202124;
                }
            }
        }

        svg {
            margin-right: 10px;
        }

        a {
            color: var(--violet);
            border-radius: 5px;

            :hover {
                background-color: var(--blue-85);
            }
            
            padding: 5px 5px 8px;
        }

    }
`;



export default Container