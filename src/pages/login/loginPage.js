import { Button, ContainerButtons, ContainerInput, Input, 
  Line, LoginHeader, Title, WrapperLogin } from "./styled";

export default function LoginPage() {

  return (
    <WrapperLogin>

      <LoginHeader>
        <img src="/image/logoBig.svg" alt="" />
        <Title>LabEddit</Title>
        <p>O projeto de rede social da Labenu</p>
      </LoginHeader>

      <ContainerInput>
        <Input type="text" placeholder="E-mail" />
        <Input type="text" placeholder="Senha" />
      </ContainerInput>

      <ContainerButtons>
        <Button>Continuar</Button>
        <Line></Line>
        <Button>Criar uma conta!</Button>
      </ContainerButtons>

    </WrapperLogin>
  )







}