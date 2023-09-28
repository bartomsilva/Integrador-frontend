import { handlePostComment, infoLikes, updateLocalStatusLike } from "../../../pages/posts/PostPage"
import {
  ButtonCancel,
  ButtonConfirm,
  ButtonDeletePostComment,
  ButtonDislike, ButtonEditPostComment, ButtonLike,
  ContainerButtonComment, ContainerButtonLiked,
  ContainerMessage, ContainerUser, MessageContent, MessageStatus,
  Score, TextArea, TextUserCreator
} from "./styled"

export default function CardMessageComments(
  comment, context, comments, setComments, editing, setEditing, post) {

  const { deletePostComment } = context

  return (
    <ContainerMessage key={comment.id}>
      <ContainerUser>
        <TextUserCreator>
          Enviado por: {comment?.creator.name}
        </TextUserCreator>
        { // BOTÕES EDIT e DELETAR
          !editing  // não está em modo de edição 
          && comment.creator.id == context.userLoged.userId // criador do posts
          && window.location.href.includes("comments") // estando na janela de posts
          && (
            <ContainerButtonComment>
              <ButtonEditPostComment
                onClick={() => { setEditing(comment) }}
              />
              <ButtonDeletePostComment
                onClick={() => {
                  deletePostComment({ postId: comment.id, action: "comments" })
                  // ajusta o valor dos comentários no post 
                  post.comments--
                  setEditing(null)
                }}
              />
            </ContainerButtonComment>
          )
        }
        { // BOTÃO CONFIRMAR E CANCELAR
          editing // modo de edição
          && comment.creator.id == context.userLoged.userId // criador do post
          && comment.id == editing.id // post em edição
          && ( // exibe os botões CONFIRMAR e CANCELAR
            <ContainerButtonComment>
              <ButtonConfirm  // BTN CONFIRMAR
                onClick={() => {
                  context.editPostComment(
                    {
                      postId: editing.id,
                      content: editing.content,
                      action: "comments"
                    }
                  )
                  setEditing(null)
                }}
              />
              <ButtonCancel // BTN CANCELAR
                onClick={
                  () => { setEditing(null) }}
              />
            </ContainerButtonComment>
          )
        }
      </ContainerUser>

      <MessageContent>
        {
          // EDITANDO O COMENTÁRIO
          editing && comment.id == editing.id
            ? (
              <TextArea
                id="content"
                name="content"
                value={editing.content}
                onChange={(e) => handlePostComment(e.target.value, setEditing)}
                min="1"
                required>
              </TextArea>
            )
            : ( // MOSTRANDO CONTEÚDO DO POST
              <>{comment?.content}</>
            )
        }
      </MessageContent>

      <MessageStatus>
        <ContainerButtonLiked>
          <ButtonLike
            onClick={async () => {
              const result = await context.sendLike(comment.id, "comments", true)
              if (result) {
                updateLocalStatusLike(comment, "like", comments, setComments)
              }
            }}
            $applyfilter={comment.liked === "like" ? "true" : null}>
          </ButtonLike>
          <Score onMouseOver={() => infoLikes(comment)}>{comment.likes - comment.dislikes}</Score>
          <ButtonDislike
            onClick={async () => {
              const result = await context.sendLike(comment.id, "comments", false)
              if (result) {
                updateLocalStatusLike(comment, "dislike", comments, setComments)
              }
            }}
            $applyfilter={comment.liked === "dislike" ? "true" : null}>
          </ButtonDislike>
        </ContainerButtonLiked>
        <ContainerButtonComment $noborder={"yes"} />
      </MessageStatus>
      
    </ContainerMessage>
  )
}