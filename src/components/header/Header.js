import { Button, ContainerButton, HeaderButton, HeaderLogo, WrapperHeader } from "./styled"

export default function Header() {
  return (
    <WrapperHeader>
      <div>        
      </div>
      <HeaderLogo>
        <img src="image/logoSmall.svg" alt="logo header" />
      </HeaderLogo>
      {/* esse botão vai depender do estado */}
      <ContainerButton>
        <Button>Entrar</Button>
      </ContainerButton>
    </WrapperHeader>
  )
}