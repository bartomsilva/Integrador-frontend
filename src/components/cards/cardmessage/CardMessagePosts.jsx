import { handlePostComment, infoLikes, updateLocalStatusLike } from "../../../pages/posts/PostPage"
import { handleComments } from "../../../router/cordinator"
import {
  ButtonCancel,
  ButtonComment, ButtonConfirm, ButtonDeletePostComment,
  ButtonDislike, ButtonEditPostComment, ButtonLike,
  ContainerButtonComment, ContainerButtonLiked,
  ContainerMessage, ContainerUser, MessageContent, MessageStatus,
  Score, TextArea, TextUserCreator
} from "./styled"

// renderiza CARD contendo texto do POST
export default function CardMessagePosts(post, context, posts, setPosts, navigate, editing, setEditing) {

  const { deletePostComment, reload, setReload } = context

  return (
    <ContainerMessage key={post.id}>
      <ContainerUser>
        <TextUserCreator>
          Enviado por: {post.creator.name}
        </TextUserCreator>

        {
          !editing  // não está em modo de edição 
          && post.creator.id == context.userLoged.userId // criador do posts
          && window.location.href.includes("posts") // estando na janela de posts
          && ( // exite os botões EDITAR e DELETAR
            <ContainerButtonComment>
              <ButtonEditPostComment
                onClick={() => { setEditing(post) }} />
              <ButtonDeletePostComment
                onClick={() => { deletePostComment({ postId: post.id, action: "posts" }) }}
              />
            </ContainerButtonComment>
          )
        }
        {
          editing // modo de edição
          && post.creator.id == context.userLoged.userId // criador do post
          && post.id == editing.id // post em edição
          && ( // exibe os botões CONFIRMAR e CANCELAR
            <ContainerButtonComment>
              <ButtonConfirm  // BTN CONFIRMAR
                onClick={() => {
                  context.editPostComment(
                    {
                      postId: editing.id,
                      content: editing.content,
                      action: "posts"
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
          // edita post - EDITANDO O POST
          editing && post.id == editing.id
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
            : ( // exibe conteúdo do POST
              <>{post.content}</>
            )
        }
      </MessageContent>
      <MessageStatus>
        <ContainerButtonLiked>
          <ButtonLike
            onClick={async () => {
              const result = await context.sendLike(post.id, "posts", true)
              if (result) {
                updateLocalStatusLike(post, "like", posts, setPosts)
              }
            }}
            // aplicar cor no bõtão
            $applyfilter={post.liked === "like" ? "true" : null}
          />

          {/* <Score>{post?.likes} = {post?.dislikes}</Score> */}
          <Score onMouseOver={() => infoLikes(post)}>{post?.likes - post?.dislikes}</Score>

          <ButtonDislike
            onClick={async () => {
              const result=await context.sendLike(post.id, "posts", false)
              if (result) {
                updateLocalStatusLike(post, "dislike", posts, setPosts)
              }
            }}
            // aplicar a cor no botão
            $applyfilter={post.liked === "dislike" ? "true" : null}
          />
        </ContainerButtonLiked>

        <ContainerButtonComment>
          <ButtonComment
            onClick={() => {
              const postSelected = [post]
              context.setPostSelect(postSelected)
              handleComments(navigate)
            }}
          />
          <Score>{post.comments > 0 ? post.comments : 0}</Score>
        </ContainerButtonComment>
      </MessageStatus>
    </ContainerMessage >
  )
}

