import styled from "styled-components"

export default function Product({ image, name, value }) {
    return (
        <Card>
            <img src={image} />
            <Desc>
                <Info>
                    <p>{name}</p>
                    <p>R${value},00</p>
                    <ion-icon name="cart"></ion-icon>
                </Info>
            </Desc>
        </Card>
    )
}

const Card = styled.div`
margin-top: 50px;
margin-right: 30px;
margin-left: 45px;
width: 240px;
height: 340px;
color: white;
background-color: #110014;
border-radius: 12px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 2px solid black;
box-shadow: 3px 3px 3px  #000;
img{
    width: 140px;
    height: 170px;
    border-radius: 10px;
    margin-top: 15px;
    border: 1px solid black;
}
`
const Desc = styled.div`
    margin-top: 20px;
    width: 200px;
    height: 100px;
    display: flex;
`
const Info = styled.div`
display: flex;
flex-direction: column;
p{
    font-size: 25px;
    margin-top: 3px;
    margin-bottom: 3px;
    margin-left: 24px;
    font-family: 'Roboto', sans-serif;
}
ion-icon{
    font-size: 30px;
    margin-left: 24px;
    margin-top: 10px;
}
`