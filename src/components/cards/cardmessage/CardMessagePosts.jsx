import { handleComments } from "../../../router/cordinator"
import {
  ButtonCancel,
  ButtonComment, ButtonConfirm, ButtonDeletePost, ButtonDislike, ButtonEditPost, ButtonLike,
  ContainerButtonComment, ContainerButtonLiked,
  ContainerMessage, ContainerUser, MessageContent, MessageStatus,
  Score, TextArea, TextUserCreator
} from "./styled"
export default function CardMessagePosts(post, context, posts, setPosts, navigate, editing, setEditing) {

  // atualiza o status do like na tela
  const updateStatusLike = (post, action) => {
    const postId = post.id ? post.id : no
    const statusLiked = post.liked ? post.liked : no
    let newLikes = post.likes ? post.likes : 0
    let newDislikes = post.dislikes ? post.dislikes : 0

    if (!postId) return
    let newLiked

    // sem atividade
    if (statusLiked == "no") {
      newLiked = action
      if (action === "like") {
        newLikes++
      } else {
        newDislikes++
      }
      // remove o like
    } else if (statusLiked === action) {
      newLiked = "no"
      if (statusLiked === "like") {
        newLikes--
      } else {
        newDislikes--
      }
    } else if (statusLiked === "dislike") {
      newLiked = "like"
      newLikes++
      newDislikes--
    } else {
      newLiked = "dislike"
      newLikes--
      newDislikes++
    }
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post, liked: newLiked,
          likes: newLikes,
          dislikes: newDislikes
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  }
  // atualizar status do textArea
  const handlePost = (e) => {
    setEditing(prevState => ({
      ...prevState,
      content: e
    }));
  };
  return (
    <ContainerMessage key={post.id}>
      <ContainerUser>

        <TextUserCreator>
          Enviado por: {post.creator.name}
        </TextUserCreator>

        {
          // somente o dono do post 
          post.creator.id == context.userLoged.userId &&
            !editing && window.location.href.includes("posts") ?
            <ContainerButtonComment>
              <ButtonEditPost onClick={() => {
                setEditing(post)
              }} />
              <ButtonDeletePost onClick={() => {
                context.deletePostComment({ postId: post.id, action: "posts" })
              }}
              />
            </ContainerButtonComment>
            : post.creator.id == context.userLoged.userId &&
              editing && post.id == editing.id ?
              <ContainerButtonComment>
                <ButtonConfirm onClick={() => {
                  context.editPostComment(
                    {
                      postId: editing.id,
                      content: editing.content,
                      action: "posts"
                    }
                  )
                  setEditing(null)
                }} />
                { }
                <ButtonCancel onClick={
                  () => { setEditing(null) }} />
              </ContainerButtonComment>
              : ""
        }
      </ContainerUser>
      <MessageContent>
        {
          // edita post
          editing && post.id == editing.id ? (
            <TextArea
              id="content"
              name="content"
              value={editing.content}
              onChange={(e) => handlePost(e.target.value)}
              min="1"
              required>
            </TextArea>
          ) : (
            <>
              {post.content}
            </>
          )
        }
      </MessageContent>

      <MessageStatus>
        <ContainerButtonLiked>
          <ButtonLike
            onClick={() => {
              context.sendLike(post.id, "posts", true)
              updateStatusLike(post, "like")
            }}
            // aplicar cor no bõtão
            applyfilter={post.liked === "like" ? "true" : null}>
          </ButtonLike>

          <Score>{post?.likes}</Score>

          <ButtonDislike
            onClick={() => {
              context.sendLike(post.id, "posts", false)
              updateStatusLike(post, "dislike")
            }}
            // aplicar a cor no botão
            applyfilter={post.liked === "dislike" ? "true" : null}>
          </ButtonDislike>

        </ContainerButtonLiked>

        <ContainerButtonComment>
          <ButtonComment onClick={() => {
            context.setFlow("comments")
            const postSelected = [post]
            context.setPostSelect(postSelected)
            handleComments(navigate)
          }}>
            {/* <svg src="/image/comments.svg" alt="" /> */}
          </ButtonComment>
          <Score>{post.comments > 0 ? post.comments : 0}</Score>
        </ContainerButtonComment>
      </MessageStatus>
    </ContainerMessage>
  )
}