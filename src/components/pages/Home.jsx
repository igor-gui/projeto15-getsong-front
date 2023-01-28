import styled from "styled-components"

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
                <Card>
                    <img src="img/guitarra.png" />
                    <Desc>
                        <Info>
                            <p>Guitarra</p>
                            <p>R$ 50,00</p>
                            <ion-icon name="cart"></ion-icon>
                        </Info>
                    </Desc>
                </Card>
                <Card>
                    <img src="img/guitarra.png" />
                    <Desc>
                        <Info>
                            <p>Guitarra</p>
                            <p>R$ 50,00</p>
                            <ion-icon name="cart"></ion-icon>
                        </Info>
                    </Desc>
                </Card>
                <Card>
                    <img src="img/guitarra.png" />
                    <Desc>
                        <Info>
                            <p>Guitarra</p>
                            <p>R$ 50,00</p>
                            <ion-icon name="cart"></ion-icon>
                        </Info>
                    </Desc>
                </Card>
                <Card>
                    <img src="img/guitarra.png" />
                    <Desc>
                        <Info>
                            <p>Guitarra</p>
                            <p>R$ 50,00</p>
                            <ion-icon name="cart"></ion-icon>
                        </Info>
                    </Desc>
                </Card>
                <Card>
                    <img src="img/guitarra.png" />
                    <Desc>
                        <Info>
                            <p>Guitarra</p>
                            <p>R$ 50,00</p>
                            <ion-icon name="cart"></ion-icon>
                        </Info>
                    </Desc>
                </Card>
                <Card>
                    <img src="img/guitarra.png" />
                    <Desc>
                        <Info>
                            <p>Guitarra</p>
                            <p>R$ 50,00</p>
                            <ion-icon name="cart"></ion-icon>
                        </Info>
                    </Desc>
                </Card>
                <Card>
                    <img src="img/guitarra.png" />
                    <Desc>
                        <Info>
                            <p>Guitarra</p>
                            <p>R$ 50,00</p>
                            <ion-icon name="cart"></ion-icon>
                        </Info>
                    </Desc>
                </Card>
                <Card>
                    <img src="img/guitarra.png" />
                    <Desc>
                        <Info>
                            <p>Guitarra</p>
                            <p>R$ 50,00</p>
                            <ion-icon name="cart"></ion-icon>
                        </Info>
                    </Desc>
                </Card>
                <Card>
                    <img src="img/guitarra.png" />
                    <Desc>
                        <Info>
                            <p>Guitarra</p>
                            <p>R$ 50,00</p>
                            <ion-icon name="cart"></ion-icon>
                        </Info>
                    </Desc>
                </Card>
                <Card>
                    <img src="img/guitarra.png" />
                    <Desc>
                        <Info>
                            <p>Guitarrasdsdsds</p>
                            <p>R$ 50,00</p>
                            <ion-icon name="cart"></ion-icon>
                        </Info>
                    </Desc>
                </Card>
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