import styled from 'styled-components';

// Main component for profile
export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 40%;
    margin: auto;
    padding-top: 5em;

    @media (max-width: 31.25em){
        width: 100%;
        margin: .1875em auto;
    }
`;

// Component InfoHeader, header for profile
export const InfoHeader = styled.div`
    display: flex;
    flex-flow: row nowrap;
    max-width: 100%;
    justify-content: space-between;
    padding: 10px 10px 5px;

        div {
            display: flex;
            flex-flow: row nowrap;

            div {
                margin-left: 15px;
                line-height: 1.8;
                display: flex;
                flex-direction: column;
                span:first-child{
                    font-weight: bold;
                }
                span:nth-child(2), span:nth-child(3) {
                    font-size: 13px;
                    color: var(--gray-60);
                }
            }
        }
`;

export const InfoSeg = styled.div`
    max-width: 100%;
    padding: 10px;
    display: flex;
    background-color: var(--shadow-0);
    border-radius: 5px;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin: 10px 5px 0;
    font-size: 13px;
    color: var(--gray-60);
    letter-spacing: 0.5px;
    line-height: 1.5;

    & div {
        flex: 1 1 50%;
        svg{color: var(--gray-60) !important;}
        
    }

    border-bottom: 20px solid var(--shadow-0);
`;

export const ButtonsProfile = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    max-width: 100%;
    height: 2.5em;
    border-radius: 5px;
    margin: 0 5px 10px;
    overflow:hidden;
    flex: 1 2 auto;
`;

export const Bprofile = styled.li`
    flex: 2 1 33.3%;
    
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.6em 1.3em;
        white-space: nowrap;

        font-weight: bold;
        background-color: var(--violet);

        :link{
            color: var(--white);
        }
        :visited{
            color: var(--white);
        }
        :hover{
            color: var(--white);
        }
        :active{
            color: var(--white);
        }

        border: 1px solid var(--violet);
        cursor: pointer;
        box-shadow: var(--bs-inset)
    
        & svg{
            margin-right: 3px;
        }
    }

`;


export default Container
