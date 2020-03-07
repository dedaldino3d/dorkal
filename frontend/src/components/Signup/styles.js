import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    heigth: 100%;

    & > header {
        width: 100%;
        height: 3em;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        background-color: #3b1287;
        padding: .834em;
        color: #fff;
    }

    & > div {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        margin-top: 2.5em;

        & > img {
            max-width: 3.75em;
            height: 3.75em;
            border-radius: 2.250em;
            border: 2px solid #787878;
            width: 100%;
            margin-bottom: 1.625em;
        }

        & > div {
            border-radius: .625em;
            border: .063em solid #888;
            padding: 1.625em .625em;
            margin: .625em;
            display: flex;
            flex-wrap: wrap;
            max-width: 21.875em;
            & > form {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                flex-direction: column;
                width: 100%;

                & input {
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    padding: 8px 12px;
                    margin-bottom: .625em;
                }

                & > button {
                    margin-top: 10px;
                    margin-bottom: 10px;
                    border-radius: 10px;
                    border: none;
                    background-color:  #0055ff;
                    color: #fff;
                    padding: 12px;
                    font-size: 1em;
                    text-align: center;
                }
            }
        }
    }
`;



export default Container