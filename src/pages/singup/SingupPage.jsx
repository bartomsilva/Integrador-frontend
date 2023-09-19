import Header from "../../components/Header/header";
import {
  AcceptTerms, AlertTerms, Button, ContainerButtons, ContainerInput,
  ContainerTerms, Input, MainContainer, SingupHeader, TextBlue,
  TextTerms, Title, WrapperSingup
} from "./styled";

export default function SingupPage() {
  return (
    <MainContainer>
      <Header />
      <WrapperSingup>
        <SingupHeader>
          <Title>
            Olá, boas vindas ao LabEddit;)
          </Title>
        </SingupHeader>

        <ContainerInput>
          <Input type="text" placeholder="Apelido" />
          <Input type="text" placeholder="E-mail" />
          <Input type="text" placeholder="Senha" />
        </ContainerInput>

        <ContainerTerms>
          <AlertTerms>
            <TextTerms>Ao continuar, você concorda com o nosso <TextBlue>Contrato de usuário </TextBlue>
              e nossa <TextBlue>Política de Privacidade</TextBlue></TextTerms>
          </AlertTerms>

          <AcceptTerms>
            <input id="termo-input" type="checkbox" name="termo" />
            <TextTerms>Eu concordo em receber emails sobre coisas legais no Labeddit</TextTerms>
          </AcceptTerms>

        </ContainerTerms>

        <ContainerButtons>
          <Button>Cadastrar</Button>
        </ContainerButtons>

      </WrapperSingup>

    </MainContainer>
  )
}