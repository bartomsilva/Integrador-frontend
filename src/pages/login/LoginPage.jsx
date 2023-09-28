import { useContext, useEffect } from "react";
import { LabedditContext } from "../../global/LabedditContext";
import { useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import {
  Button, ContainerButtons, ContainerInput, Input, Line,
  LoginHeader, Title, WrapperLogin
} from "./styled";
import { handlePosts, handleSingUp } from "../../router/cordinator";

export default function LoginPage() {
  
  const context = useContext(LabedditContext)
  const navigate = useNavigate()
  const [form, onChange, resetForm] =
  useForm({ email: "", password: "" })
  
  
  const sendFormLogin = async (e) => {
    e.preventDefault()
    await context.userLogin(form)
    const response = context.getToken()
    resetForm()
    if (response) {
      handlePosts(navigate)
    }
  }

  return (

    !context.userLoged && (
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
          type="password"
          placeholder="digite sua senha"
          id="password"
          name="password"
          value={form.password}
          onChange={onChange}
          minLength="6"
          required />
      </ContainerInput>

      <ContainerButtons>
        <Button type="submit">Continuar</Button>
        <Line></Line>
        <Button onClick={() => handleSingUp(navigate)}>Crie uma conta!</Button>
      </ContainerButtons>

    </WrapperLogin>)

  )
}