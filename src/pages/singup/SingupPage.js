import Header from "../../components/header/Header";
import { Button, ContainerButtons, ContainerInput, ContainerText, Input, SingupHeader, Title, WrapperSingup } from "./styled";

export default function SingupPage() {
  return (
    <>
      {/* <Header /> */}
      <WrapperSingup>

        <SingupHeader>
          <Title>Olá, boas vindas ao LabEddit;)</Title>

        </SingupHeader>


        <ContainerInput>

          <Input type="text" placeholder="Apelido" />
          <Input type="text" placeholder="E-mail" />
          <Input type="text" placeholder="Senha" />

        </ContainerInput>

        <ContainerText>

        </ContainerText>
        <p>Ao continuar, você concorda com o nosso Contrato de usuário e
          nossa Política de Privacidade</p>
        <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>

        <ContainerButtons>
          <Button>Cadastrar</Button>
        </ContainerButtons>
      </WrapperSingup>

    </>
  )
}