import {
  ButtonComment, ButtonDislike, ButtonLike,
  ContainerButtonComment, ContainerButtonLiked,
  ContainerMessage, MessageContent, MessageStatus,
  Score, TextUserCreator
} from "./styled"

export default function CardMessageComments(comment, context, comments, setComments, navigate) {

  // atualiza o status do like na tela
  const updateStatusLike = (action) => {
    const commentId = comment.id ? comment.id : no
    const statusLiked = comment.liked ? comment.liked : no
    let newLikes = comment.likes ? comment.likes : 0
    let newDislikes = comment.dislikes ? comment.dislikes : 0

    if (!commentId) return

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

    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment, liked: newLiked,
          likes: newLikes,
          dislikes: newDislikes
        };
      }
      return comment;
    });
    setComments(updatedComments);
    context.setFlow("reload")
  }
  
  return (
    <ContainerMessage key={comment.id}>

      <TextUserCreator>Enviado por: {comment?.creator.name}</TextUserCreator>

      <MessageContent>
        {comment?.content}
      </MessageContent>

      <MessageStatus>
        <ContainerButtonLiked>
          <ButtonLike
            onClick={() => {
              context.sendLike(comment.id, "comments", true)
              updateStatusLike("like")
            }}
            applyfilter={comment.liked === "like" ? "true" : null}>
          </ButtonLike>

          <Score>{comment.likes}</Score>

          <ButtonDislike
            onClick={() => {
              context.sendLike(comment.id, "comments", false)
              updateStatusLike("dislike")
            }}
            applyfilter={comment.liked === "dislike" ? "true" : null}>
          </ButtonDislike>

        </ContainerButtonLiked>

        <ContainerButtonComment noborder={"yes"}>
          {/* <ButtonComment>
            <svg src="/image/comments.svg" alt="" />
          </ButtonComment>
          <Score>{comment.comments > 0 ? comment.comments : 0}</Score> */}
        </ContainerButtonComment>

      </MessageStatus>

    </ContainerMessage>
  )
}