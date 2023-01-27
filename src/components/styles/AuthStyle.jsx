import styled from "styled-components";

const AuthStyle = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 9px;
    height: max-content;
    margin-top: 80px;
    input {
        height: 40px;
        width: 375px;
        border-radius: 5px;
        ::placeholder{
            opacity: 0.5;
        }
    }
`
export default AuthStyle;