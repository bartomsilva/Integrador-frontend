import { useContext } from "react"
import { LabedditContext } from "../../global/LabedditContext"
import { Button, ContainerButton, HeaderLogo, WrapperHeader } from "./styled"

import { styled } from "styled-components";

const ContainerUser = styled.div`
  padding-left: 15px;
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-weight: 600;
  line-height: 47px;
  letter-spacing: 0em;
  color: #1F1F1F;
`;

export default function Header() {
  const context = useContext(LabedditContext)
  const {flow } = context

  return (
    <WrapperHeader>
      <ContainerUser>
        <p>userName</p>        
      </ContainerUser>
      <HeaderLogo>
        <img src="image/logoSmall.svg" alt="logo header" />
      </HeaderLogo>

      <ContainerButton>        
        <Button>{flow=="login"?"Login":"Logout"}</Button>
      </ContainerButton>

    </WrapperHeader>
  )
}