import styled from 'styled-components';

// Main component for profile
export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    padding-top: 5em;
`;

// Component InfoHeader, header for profile
export const InfoHeader = styled.div`
    display: flex;
    flex-flow: row nowrap;
    max-width: inherit;
    flex: 2 1 4.5em;
    justify-content: space-between;
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e3e3e3;
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

    & > button {
        background: transparent;
        color: #1486f3;
        font-size: 1.6em;
        padding: 12px;
        :hover{
            background: #eaf4ff;
        }
        height: 2em;
        border: none;
        border-radius: 40px !important;
    }
`;

export const InfoSeg = styled.div`

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-self: flex-end;
    flex: 1 3 auto;
    width: 100%;
    margin: 0 auto;
    padding: 4px 10px 1px;
    font-size: 1.3em;

    /* Each p element inside current div */
    & > p {
        display: flex;
        align-items: center;
        padding: 3px 10px;
        background-color: #eaf4ff;
        border-radius: 40px !important;
        border: 1px solid #ededed;
        box-shadow: 1px 1px 5px 2px 
        rgba(20,134,243,0.09) !important;
        color: #666;
        margin-right: .1875;
        /* each element span inside current, contain icon p */
        span:first-of-type {
            font-size: .8125em;
            margin-left: .1875em;
        }
    }
`;

export default Container
