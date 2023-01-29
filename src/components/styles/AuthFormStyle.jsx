import styled from "styled-components";

const AuthStyle = styled.form`
    background-image: url(${props => props.backImage});
    background-size: 700px;
    box-sizing: border-box;
    padding-top: 100px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;
    width: 30%;
    min-width: 400px;
    margin-top: 80px;
    border-radius: 5% 40% 50% 70%;
    box-shadow: 5px 16px 2px 1px rgba(0, 0, 0, 0.2);
    min-height: 450px;

    input {
        height: 40px;
        width: 60%;
        max-width: 375px;
        box-sizing: border-box;
        padding-left: 10px;
        border-radius: 5px;
        border: 0;
        ::placeholder{
            opacity: 0.7;
        }
    }
    button {
        height: 40px;
        width: 35%;
        border: 0;
        border-radius: 5px;
        max-width: 135px;
        min-width: max-content;
        background-color: #216097;
    }
`
export default AuthStyle;