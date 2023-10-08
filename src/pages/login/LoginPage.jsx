import { useContext, useState } from "react";
import { LabedditContext } from "../../global/LabedditContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import * as s from "./styled"
import { handlePosts, handleSingUp } from "../../router/cordinator";
import { ButtonToogleEye, ContainerEyePassword } from "../../styles/styles";
import { BASE_URL } from "../../constants/constants";
import axios from "axios";

//----
export default function LoginPage() {

  const context = useContext(LabedditContext)
  const navigate = useNavigate()
  const [eyePassword, setEyePassword] = useState()
  const [form, onChange, resetForm] = useForm({ email: "", password: "" })
  const [login, setLogin] = useState(false)

  const sendFormLogin = async (e) => {
    e.preventDefault()
    setLogin(true)
    await userLogin(form)
    const response = context.getToken()
    if (response) {
      resetForm()
      handlePosts(navigate)
    } else {
      setLogin(false)
    }
  }
  return (

    !context.userLoged && (
      <s.WrapperLogin onSubmit={sendFormLogin}>

        <s.LoginHeader>
          <img src="/image/logoBig.svg" alt="" />
          <s.Title>LabEddit</s.Title>
          <p>O projeto de rede social da Labenu</p>
        </s.LoginHeader>

        <s.ContainerInput>
          <s.Input
            type="email"
            placeholder="informe o e-mail"
            name="email"
            value={form.email}
            onChange={onChange}
            title='insira um email válido!'
            required />
          <s.Input
            type={eyePassword ? "text" : "password"}
            placeholder="digite sua senha"
            name="password"
            value={form.password}
            onChange={onChange}
            minLength="6"
            required />

          <ContainerEyePassword>
            <ButtonToogleEye $eye={eyePassword} onClick={() =>
              setEyePassword(!eyePassword)}>
            </ButtonToogleEye>
          </ContainerEyePassword>

          <s.ContainerBadPassword>
            
            <s.BadPassword href="#" onClick={() => resetPassword()}>
              esqueceu a senha?
            </s.BadPassword>

          </s.ContainerBadPassword>

        </s.ContainerInput>

        <s.ContainerButtons>
          <s.Button>{!login ? 'Continuar' : 'Por favor aguarde...'}</s.Button>
          <s.Line></s.Line>
          <s.Button onClick={() => handleSingUp(navigate)}>Crie uma conta!</s.Button>
        </s.ContainerButtons>

      </s.WrapperLogin>)
  )
  // EFETURAR O LOGIN
  async function userLogin(input) {
    const PATH = BASE_URL + "/users/login"
    await axios.post(PATH, input)
      .then(response => {
        context.setToken(response.data.token)
        context.setUserLoged(response.data.user)
      })
      .catch(error => {
        if (error.response) {
          context.modal("Email ou senha inválida", "", "error")
        } else {
          context.modal("Sistema indisponível", "tente mais tarde", "error")
        }
      })
  }
  // RESETAR SENHA
  async function resetPassword(){
    const token = context.getToken()
    if(!form.email){
      context.modal("Informe o email","","error")
    } else {
      const PATH = BASE_URL + "/users/sendemail"
      const input = {
        email: form.email
      }
      await axios.post(PATH, input)
        .then(response => {})
        .catch(error => {
          // if(error.response.data){
          //   context.modal(error.response.data.message)          
          // } else {
          //   context.modal("Ops, ocorreu um erro!")          
          // }
        }).finally(
          context.modal("caso esse email exista,\n será enviado um link\n para efetivar o reset de sua senha!")
        )      
    }
  }
}
