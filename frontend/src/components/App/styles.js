import styled from 'styled-components'



export const MainContainer = styled.div`

    display: flex;
    padding-top: 5em;
    justify-content: flex-start;

    #aside, .aside {
        display: none;
        padding: 5px;
    }

    & > #aside{
        flex: 1 5 auto;
    }

    & > section{
        width: 100%;
        flex: 5 2 auto;
    }

    & > .aside{
        flex: 1 4 auto;
    }

    @media (min-width: 718px){
        section {
            width: 60%;
        }
        .aside{
            display: block;
            width: 40%;
        }

    }

    @media (min-width: 918.1px){
        section{
            width: 45%;
        }
        .aside{
            width: 27.5%;
            display: block;
        }
        #aside{
            display: block;
            width: 27.5%;
        }
    }

    @media (min-width: 1220px){
        max-width: 1220px;
        margin: 0 auto;
    }
`;


export default MainContainer