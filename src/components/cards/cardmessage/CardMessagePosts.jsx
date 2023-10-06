import { handlePostComment, infoLikes, updateLocalStatusLike } from "../../../pages/posts/PostPage"
import { handleComments } from "../../../router/cordinator"
import * as s  from "./styled"

// renderiza CARD contendo texto do POST
export default function CardMessagePosts(post, context, posts, setPosts, navigate, editing, setEditing) {
  const { deletePostComment, reload, setReload,isPageOpen } = context

  return (
    <s.ContainerMessage key={post.id}>
      <s.ContainerUser>
        <s.TextUserCreator>
          Enviado por: {post.creator.name}
        </s.TextUserCreator>

        {
          !editing  // não está em modo de edição 
          && post.creator.id == context.userLoged.userId // criador do posts
          && window.location.href.includes("posts") // estando na janela de posts
          && ( // exite os botões EDITAR e DELETAR
            <s.ContainerButtonEdit>
              <s.ButtonEditPostComment
                onClick={() => { setEditing(post) }} />
              <s.ButtonDeletePostComment
                onClick={() => { deletePostComment({ postId: post.id, action: "posts" }) }}
              />
            </s.ContainerButtonEdit>
          )
        }
        {
          editing // modo de edição
          && post.creator.id == context.userLoged.userId // criador do post
          && post.id == editing.id // post em edição
          && ( // exibe os botões CONFIRMAR e CANCELAR
            <s.ContainerButtonEdit>
              <s.ButtonConfirm  // BTN CONFIRMAR
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
              <s.ButtonCancel // BTN CANCELAR
                onClick={
                  () => { setEditing(null) }}
              />
            </s.ContainerButtonEdit>
          )
        }
      </s.ContainerUser>
      <s.MessageContent>
        {
          // edita post - EDITANDO O POST
          editing && post.id == editing.id
            ? (
              <s.TextArea
                id="content"
                name="content"
                value={editing.content}
                onChange={(e) => handlePostComment(e.target.value, setEditing)}
                min="1"
                required>
              </s.TextArea>
            )
            : ( // exibe conteúdo do POST
              <>{post.content}</>
            )
        }
      </s.MessageContent>
      <s.MessageStatus>
        <s.ContainerButtonLiked>
          <s.ButtonLike
            onClick={async () => {
              const result = await context.sendLike(post.id, "posts", true)
              if (result) {

                // context.setReload(!context.reload)
                updateLocalStatusLike(post, "like", posts, setPosts)
              }
            }}
            // aplicar cor no bõtão
            $applyfilter={post.liked === "like" ? "true" : null}
          />
          {/* <Score>{post?.likes} = {post?.dislikes}</Score> */}
          <s.Score onMouseOver={() => infoLikes(post)}>{post?.likes - post?.dislikes}</s.Score>
          <s.ButtonDislike
            onClick={async () => {
              const result=await context.sendLike(post.id, "posts", false)
              if (result) {
                updateLocalStatusLike(post, "dislike", posts, setPosts)
              }
            }}
            // aplicar a cor no botão
            $applyfilter={post.liked === "dislike" ? "true" : null}
          />
        </s.ContainerButtonLiked>

        <s.ContainerButtonComment>
          <s.ButtonComment
            onClick={() => {
              const postSelected = [post]
              context.setPostSelect(postSelected)
              handleComments(navigate)
            }}
          />
          <s.Score>{post.comments > 0 ? post.comments : 0}</s.Score>
        </s.ContainerButtonComment>
      </s.MessageStatus>
    </s.ContainerMessage >
  )
}

