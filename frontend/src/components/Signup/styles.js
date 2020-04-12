import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    max-width: 21.875em;
    margin: 0 auto;

    @media (max-width: 30.8em){
        max-width: 100%;
        align-self: center;
    }

    h1{
         
        font-weight: 600;
        margin: 10px auto 20px;
    }
    
    p {
        margin: 5px auto;
    }

    div:nth-of-type(2) {
        border-radius: .625em;
        border: none;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) !important;
        background-color: #fff;
        padding: 1.625em .625em;
        margin: .625em 5px;
        display: flex;
        flex-wrap: wrap;
    }
`;

export const Social = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1em;
    width: 100%;
    
    a{
        box-shadow: inset 0 2px 4px 0 rgba(255, 255,255, .2),inset 0 4px 10px 0 rgba(255, 255,255, .3);
    }
    a:first-child{
        background-color: #1a75ff;
    }
    a:nth-child(2){
        background-color: #ff0066;
    }
    a:last-child{
        background-color: #1a1aff;
    }
`;


export const SocialButton = styled.a`

    border: none;
    border-radius: 10px;
    padding: 8px 25px;
    background-color: #444;
    color: #fff;
    cursor: pointer;
    transform: transform 80ms ease-in-out;

    :active{
        transform: scale(0.95);
    }
`;
export const Form = styled.form`

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;

    input {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 8px 12px;
        margin-bottom: .925em;
        box-sizing: border-box;

        :focus{
            border: 1px solid #99c2ff;
            box-shadow: 0 1px 6px #99c2ff, 0 1px 8px #99c2ff;
            transition: border .3s ease-in-out;
        }
    }

    & > button {
        margin-top: 10px;
        margin-bottom: 10px;
        border-radius: 20px;
        border: none;
        background-color:  #8a00e6;
        box-shadow: inset 0 2px 4px 0 rgba(255, 255,255, .2),inset 0 4px 10px 0 rgba(255, 255,255, .3);
        color: #fff;
        font-size: 1em;
        text-align: center;        
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;

        :active {
            transform: scale(0.95);
        }
    }
`;

export default Container