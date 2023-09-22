import { useContext } from "react";
import { LabedditContext } from "../../global/LabedditContext";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import {
  AcceptTerms, AlertTerms, Button, ContainerButtons, ContainerInput,
  ContainerTerms, Input, MainContainer, SingupHeader, TextBlue,
  TextTerms, Title, WrapperSingup
} from "./styled";
import { useForm } from "../../hooks/useForm";

export default function SingupPage() {

  const navigate = useNavigate()
  const [form, onChange, resetForm] =
    useForm({ name: "", email: "", password: "", repassword: "", newsLetter: "" })
  const context = useContext(LabedditContext)

  const { setFlow } = context

  const sendFormSingUp = async (e) => {

    e.preventDefault()
    if (form.password !== form.repassword) {
      swal("As senhas não são iguais!", "", "error")
    } else {
      const newUser = {
        name: form.name,
        email: form.email,
        password: form.password,
        newsLetter: form.newsLetter
      }
      await context.userSingup(newUser)
      if (context.getToken()) {
        setFlow("posts")
        navigate("/posts")
      }
    }
    resetForm()


  }
  return (
    <MainContainer onSubmit={sendFormSingUp}>
      <Header />

      <WrapperSingup>
        <SingupHeader>
          <Title>
            Olá, boas vindas ao LabEddit;)
          </Title>
        </SingupHeader>

        <ContainerInput>
          <Input
            type="text"
            placeholder="Apelido"
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
            title='informe seu nome (de 2 até 15 caracteres)'
            min="2"
            max="15"
            required />
          <Input
            type="email"
            placeholder="E-mail"
            id="email"
            name="email"
            value={form.email}
            onChange={onChange}
            title='insira um email válido!'
            required />
          <Input
            type="text"
            placeholder="Senha"
            id="password"
            name="password"
            value={form.password}
            onChange={onChange}
            title='padrão da senha não bate'
            min="6"
            max='15'
            required />
          <Input
            type="text"
            placeholder="Repita a Senha"
            id="repassword"
            name="repassword"
            value={form.repassword}
            onChange={onChange}
            min="6"
            max='15'
            required />
        </ContainerInput>

        <ContainerTerms>
          <AlertTerms>
            <TextTerms>Ao continuar, você concorda com o nosso <TextBlue>Contrato de usuário </TextBlue>
              e nossa <TextBlue>Política de Privacidade</TextBlue></TextTerms>
          </AlertTerms>

          <AcceptTerms>
            <input
              type="checkbox"
              id="newsLetter"
              name="newsLetter"
              value={form.newsLetter}
              onChange={onChange}
            />
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