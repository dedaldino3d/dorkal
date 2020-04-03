import styled from 'styled-components';




// Main component style for trending component
export const Container = styled.ul`

    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    max-height: 100%;
    margin: 5px 0;
    padding: 8px;

`;


export const Li = styled.li`
    position: relative;
    padding: 8px;
    height: 100%;
    flex: 1 0 140px;
    max-width: 180px;
    display: flex;
    flex-direction: column;
    text-align: center;
    border: none;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) !important;
    border-radius: 10px;
    background-color: #fff;
    font-size: 14px;
    margin: 4px 2px;

    img {
        align-self: center;
    }
`;

export const ImgTrending = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    opacity: .2;
`;

export const Content = styled.div`

    padding-bottom: 1.98em;
    
    span {
        font-weight: bold;
        color: #444;
        padding: 3px;
        margin-bottom: 5px;
    }

    p {
        text-align: center;
        text-size-adjust: 100%;
    }
    
`;


export const Footer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    & > span {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        color: rgb(56, 68, 77);
    
        svg{
            margin-left: 3px;
        }
    }
`;


export default Container
