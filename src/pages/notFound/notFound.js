import styled from "styled-components"
// import { useNavigate } from 'react-router-dom'
// import { gotoHome } from "../../Router/Coordination";

export const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  h1{
    font-family: Arial, Helvetica, sans-serif;
  }

  img{ 
    width: 30%;
  }
`;

export const Button = styled.button`
  padding: 0 10px;
  height: 40px;
  border: none;
  border-radius: 20px;
  margin-top: 30px;
  font-weight: 700;
  background-color: #33a4f5;
  cursor: pointer;

`

export function PageNotFound(){

  const navigate = useNavigate()

  return(
    <Container>
      {/* <h1>Oi!!!!</h1> */}
      <img src={'/image/404-error-page.png'} alt="image pagenotfound" />
      <h2>Está página não existe,</h2>
      {/* <Button onClick={()=>gotoHome(navigate)}>voltar para página principal!</Button> */}
    </Container>
  )
}