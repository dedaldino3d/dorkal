import styled from 'styled-components';

// Main component for profile
export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    padding-top: 5em;
    max-width: 40%;
    margin: auto;

    @media (max-width: 31.25em){
        max-width: 100%;
        margin: .1875em auto;
    }
`;

// Component InfoHeader, header for profile
export const InfoHeader = styled.div`
    display: flex;
    flex-flow: row nowrap;
    max-width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid rgb(56,68, 77);
    padding: 10px 10px 5px;

/* first div in component InfoHeader */
    & > div:first-child {
        display: flex;
        flex-flow: row nowrap;

        & div:first-of-type {
            margin-left: .3125em;

            & div:first-of-type {
                margin-bottom: .3125em;
            }
        }
    }

`;

export const AddUser = styled.div`
    max-width: 100%;
    border-radius: 100% !important;
    padding-top: 10px;
    & > a {
        background: #eaf4ff;
        color: #1486f3;
        padding: 8px;
        padding-bottom: 4px;
        transition: all 100ms ease-in-out 0s;
        border: none;
        border-radius: 40px !important;
        :hover {
            background-color: #6f1287 !important;   
        }
        & span {
            width: 24px !important;
            height: 24px !important;
        }
    }
`


export const InfoSeg = styled.div`
    max-width: 100%;
    bottom: 0;
    padding: 4px 10px 1px;
    display: flex;
    flex-wrap: wrap;
    flex-flow: row;
    justify-content: space-between;

        /* Each p element inside current div */
    & > p {
        font-size: calc(12px + (14 - 11) * ((100vw - 200px) / (1600 - 200))) !important;
        color: #888;
        font-weight: bold;
        line-height: 1.4;
        max-width: inherit;
        & span {
            display: flex;   
            flex-wrap: wrap;     
            align-items: center;
            font-weight: normal;
            svg{
                margin-right: 3px;
                margin-left: 4px;
            }
        }
    }
`;

export default Container
