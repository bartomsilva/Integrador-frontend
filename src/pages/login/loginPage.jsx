import { useContext } from "react";
import { LabedditContext } from "../../global/LabedditContext";
import { useNavigate } from "react-router-dom";
import {
  Button, ContainerButtons, ContainerInput, Input,
  Line, LoginHeader, Title, WrapperLogin
} from "./styled";
import { useForm } from "../../hooks/useForm";

export default function LoginPage() {

  const navigate = useNavigate()
  const [form, onChange, resetForm] =
    useForm({ email: "", password: "" })

  const context = useContext(LabedditContext)
  const { setFlow } = context

  const sendFormLogin = (e) => {
    e.preventDefault()
    resetForm()

    // aqui fazer enviar solicitação para api
    // o resultado de response vai ser de acordo com 
    // a resposta
    const response = true
    if (response) {
      setFlow("posts")
      navigate("/posts")
    }

  }

  return (
    <WrapperLogin onSubmit={sendFormLogin}>

      <LoginHeader>
        <img src="/image/logoBig.svg" alt="" />
        <Title>LabEddit</Title>
        <p>O projeto de rede social da Labenu</p>
      </LoginHeader>

      <ContainerInput>
        <Input
          type="email"
          placeholder="informe o e-mail"
          id="email"
          name="email"
          value={form.email}
          onChange={onChange}
          title='insira um email válido!'
          required />
        <Input
          type="text"
          placeholder="digite sua senha"
          id="password"
          name="password"
          value={form.password}
          onChange={onChange}
          minLength="6"
          required />
      </ContainerInput>

      <ContainerButtons>
        <Button>Continuar</Button>
        <Line></Line>
        <Button onClick={() => navigate("/singup")}>Criar uma conta!</Button>
      </ContainerButtons>

    </WrapperLogin>
  )
}