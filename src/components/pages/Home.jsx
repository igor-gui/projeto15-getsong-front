import styled from "styled-components"
import Products from "../ListProducts"
import Product from "../Product"

export default function Home() {
    return (
        <ScreenHome>
            <Header>
                <Logo>
                    <h1>GetSong</h1>
                    <ion-icon name="musical-notes"></ion-icon>
                    <p> O site de músicos, para músicos</p>
                </Logo>
                <img src="img/macaco.png"></img>
                <Options>
                    <p>Meus pedidos</p>
                    <ion-icon name="document-text-outline"></ion-icon>
                    <p>Sair</p>
                    <ion-icon name="exit-outline"></ion-icon>
                </Options>
            </Header>
            <List>
            {Products.map((i) => (
                <Product
                image={i.image}
                name={i.name}
                value={i.value}
                />
            ))}
            </List>
            <Cart>
                <ion-icon name="cart"></ion-icon>
                <p>Seu carrinho :</p>
                <Purchasing></Purchasing>
                <Finish>
                    <p>Finalizar e comprar</p>
                </Finish>
            </Cart>
        </ScreenHome>
    )
}
const ScreenHome = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
background-color: #33003D
`
const Header = styled.div`
width: 100%;
height: 120px;
background-color: #110014;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 2px solid #240702;
img{
    height: 120px;
    width: 300px;
    margin-right: 190px;
}
`
const Logo = styled.div`
display: flex;
align-items: center;
margin-left: 20px;
h1{
    font-size: 50px;
    font-family: 'Raleway', sans-serif;
    color: white;
    margin-left: 30px;
}
ion-icon{
    color: white;
    font-size: 50px;
}
p{
    font-size: 20px;
    font-family: 'Raleway', sans-serif;
    color: white;
    margin-left: 20px;
}
`
const Options = styled.div`
display: flex;
align-items: center;
margin-right: 60px;
p{
    letter-spacing: 2px;
    font-size: 22px;
    font-family: 'Raleway', sans-serif;
    color: white; 
    margin-left: 50px;
    margin-right: 3px;
}
ion-icon{
    color: white;
    font-size: 40px;
}
`
const List = styled.div`
width: 1600px;
display: flex;
flex-wrap: wrap;
`
const Cart = styled.div`
width: 100%;
height: 180px;
margin-top: 40px;
background-color: #110014;
border-top: 2px solid #240702;
display: flex;
align-items: center;
p{
    font-size: 40px;
    font-family: 'Raleway', sans-serif;
    color: white;
}
ion-icon{
    color: white;
    font-size: 50px;
    margin-left: 50px;
    margin-right: 20px;
}
`
const Purchasing = styled.div`
    width: 900px;
    height: 120px;
    background-color: #ffffff9d;
    border-radius: 12px;
    margin-left: 100px;
`
const Finish = styled.div`
    width: 220px;
    height: 80px;
    background-color: #005a00c7;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin-left: 100px;
    p{
        font-size: 20px;
        color: white;
    }
`