import styled from "styled-components"

export default function Finished() {
    return (
        <ScreenFinished>
            <Header>
                <Logo>
                    <h1>GetSong</h1>
                    <ion-icon name="musical-notes"></ion-icon>
                    <p> O site de músicos, para músicos</p>
                </Logo>
                <img src="img/macaco.png"></img>
                <Options>
                    <p>Produtos</p>
                    <ion-icon name="document-text-outline"></ion-icon>
                    <p>Sair</p>
                    <ion-icon name="exit-outline"></ion-icon>
                </Options>
            </Header>
            <h2>Seus pedidos :</h2>
            <List>
            </List>
        </ScreenFinished>
    )
}
const ScreenFinished = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
background-color: #33003D;
h2{
    margin-top: 80px;
    letter-spacing: 2px;
    font-size: 28px;
    font-family: 'Raleway', sans-serif;
    color: white; 
    margin-right: 950px;
}
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
    margin-top: 50px;
    width: 1200px;
    height: 600px;
    background-color: #d5a2df;
    margin-bottom: 100px;
    border: 2px solid #240702;
    border-radius: 12px;
`