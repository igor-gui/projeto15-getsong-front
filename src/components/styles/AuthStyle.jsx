import styled from "styled-components";

const AuthStyle = styled.form`
    background-image: url(${props => props.backImage});
    background-size: 100%;
    box-sizing: border-box;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;
    height: 880px;
    width: 100%;
    margin-top: 80px;
    input {
        height: 40px;
        width: 60%;
        max-width: 375px;
        box-sizing: border-box;
        padding-left: 10px;
        border-radius: 5px;
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