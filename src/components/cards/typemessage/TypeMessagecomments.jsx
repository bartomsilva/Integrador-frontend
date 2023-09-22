import { LabedditContext } from "../../../global/LabedditContext";
import { useForm } from "../../../hooks/useForm"
import { useContext } from "react";
import { ButtonMessage, ContainerMessage, Line, TextArea, WrapperMessage } from "./styled";

export default function TypeMessageComments() {

  const [form, onChange, resetForm] =
    useForm({ content: "" })
  const context = useContext(LabedditContext)

  const sendFormAction = async (e) => {
    e.preventDefault()

    const newAction = {
      postId: context.postSelect[0].id,
      content: form.content
    }
    await context.sendPost(newAction, "comments")
    resetForm()
    // ataliza os dados do post ( no topo da página )
    const newPostSelect = [...context.postSelect];
    const updatedComments = newPostSelect[0].comments + 1
    newPostSelect[0].comments = updatedComments;
    context.setPostSelect(newPostSelect);    
  }

  return (

    <WrapperMessage onSubmit={sendFormAction}>

      <ContainerMessage>
        <TextArea
          id="content"
          name="content"
          value={form.content}
          onChange={onChange}
          placeholder="Adicionar comentário"
          min="1"
          required
        />
      </ContainerMessage>

      <ButtonMessage>
        Responder
      </ButtonMessage>

      <Line></Line>
      
    </WrapperMessage>
  )
}
