import { LabedditContext } from "../../global/LabedditContext";
import { Line } from "../../pages/login/styled";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { styled } from "styled-components";
import { useContext } from "react";

export const WrapperMessage = styled.form`
  display: flex;
  max-width: 365px;
  height: fit-content;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  margin-bottom: 18px;
`;

export const ContainerMessage = styled.div`
  width: 364px;
  height: 131px;
  background-color: #EDEDED;
  border-radius: 12px;
  margin: 20px 0 15px 0;
`;

export const ButtonMessage = styled.button`
  width: 364px;
  height: 47px;
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  padding: 12px, 145px, 12px, 145px;
  border-radius: 12px;  
  border: none;
  font-family: IBM Plex Sans;
  font-size: 18px;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: 0em;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 15px;

  &:hover{
    cursor: pointer;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #EDEDED;
  padding-inline: 20px;
  padding-top: 20px; 
  border-radius: 12px;
`;

export default function TypeMessage(props) {
  // action = posts / comments

  const navigate = useNavigate()
  const [form, onChange, resetForm] =
    useForm({ content: "" })
  const context = useContext(LabedditContext)

  const action = context.flow

  const sendFormAction = async (e) => {
    e.preventDefault()

    if (action === "posts") {
      const newAction = { content: form.content }
      await context.sendPost(newAction)
      context.setFlow("reload")
    } else {

      // const newAction = { postId: postId }

    }
    resetForm()
  }

  return (

    <WrapperMessage onSubmit={sendFormAction}>

      <ContainerMessage>
        <TextArea
          id="content"
          name="content"
          value={form.content}
          onChange={onChange}
          placeholder={action === "posts"
            ? "Escreva seu post"
            : "Adicionar comentário"}
          min="1"
          required
        />
      </ContainerMessage>

      {/* conteúdo do botão via paramentros - texto e função*/}
      <ButtonMessage>
        {action === "posts"
          ? "Postar"
          : "Responder"
        }
      </ButtonMessage>
      <Line></Line>
    </WrapperMessage>
  )
}