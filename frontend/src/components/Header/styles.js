import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding: .4em;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 100%;
    min-height: 3em;
    max-height: 4em;
    z-index: 800;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid #ddd;
    box-shadow: 0 3px 2px -2px rgba(200,200,200,0.2);
    overflow: hidden;
    
    & > div {
        flex: 0 1 auto;
        @media (max-width: 576px){
            flex: 1 1 auto;
        }
        height: 100%;
        z-index: 1;
        & a {
            color: #666;
            padding: .6em;
            margin: .03em;
            font-size: 22px;
            line-height: 0;
            :hover {
                background-color: #fafafa;
            }
        }
    }

`;

export default Container
