import { useNavigate } from "react-router-dom";
import { Button } from "../signup/styled";
import { Container } from "./styled";
import { handleHome } from "../../router/cordinator";

export function PageNotFound(){

  const navigate = useNavigate()
  return(
    <Container>
      <h1>404</h1>
      <br/>
      <h2>Está página não existe!</h2>

      <Button onClick={()=>handleHome(navigate)}>Login</Button>
    </Container>
  )
}