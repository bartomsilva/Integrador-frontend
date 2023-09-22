import { LabedditContext } from "../../global/LabedditContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react"
import {
  Button, ContainerButton,
  ContainerUser,
  HeaderLogo, WrapperHeader
} from "./styled"

export default function Header() {
  const context = useContext(LabedditContext)
  const { flow, logout, userLoged } = context

  const navigate = useNavigate()

  return (
    <WrapperHeader>
      <ContainerUser>
        <p>{userLoged?.userName}</p>
      </ContainerUser>
      <HeaderLogo>
        <img src="image/logoSmall.svg" alt="logo header" />
      </HeaderLogo>

      <ContainerButton>
        {
          flow === "login" ?
            <Button onClick={() => navigate("/")}>Login</Button>
            :
            <Button onClick={() => logout(navigate)}>Logout</Button>
        }
      </ContainerButton>

    </WrapperHeader>
  )
}