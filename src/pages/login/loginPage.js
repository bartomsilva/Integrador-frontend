import { WrapperLogin } from "./styled";

export default function LoginPage() {

  return (
    <WrapperLogin>
      <img src="/image/logoBig.svg" alt="" />
      <p>O projeto de rede social da Labenu</p>

      <input type="text" placeholder="E-mail" />
      
      <br/>
      
      <input type="text" placeholder="Senha" />

      <br/>

      <button>Continuar</button>
      <br/>
      <button>Criar uma conta!</button>
      
    </WrapperLogin>
  )







}