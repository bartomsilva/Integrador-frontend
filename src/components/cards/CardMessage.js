import { styled } from "styled-components";

export const ContainerMessage = styled.div`
  width: 364px;
  min-height: fit-content;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 15px;
  border: 1px solid #E0E0E0
`;

export const TextUserCreator = styled.p`
font-family: IBM Plex Sans;
font-size: 12px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: left;
color: #6F6F6F;
`;

export const MessageContent = styled.div`
  width: 100%;
  min-height: fit-content;
  padding: 10px;  
  margin: 20px 0px;
`;

export const MessageStatus = styled.div`
  display: flex;
  width: 174px;
  gap: 20px;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  min-height: fit-content;
  padding: 10px;
 
`;

export const ContainerButtonLiked = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 98px; // 88
  height: 28px;
  border-radius: 28px;
  border: 1px solid rgba(0,0,0,0.12);
  padding: 5px 0;
  
`;

export const ContainerButtonComment = styled(ContainerButtonLiked)`
  width: 95.33px; 
  border-radius: 28px;
`;

export const ButtonLike = styled.button`
  width: 19.72px;
  height: 19.72px;
  border: none;
  background-color: transparent;
  background-image: url(/image/like.svg);
  background-repeat: no-repeat;
  background-position: center;
  /* filter: invert(56%) sepia(75%) saturate(2848%) 
          hue-rotate(358deg) brightness(99%) contrast(89%); */
  
  ${({ applyFilter }) =>
    applyFilter &&
    `
      filter: invert(56%) sepia(75%) saturate(2848%) hue-rotate(358deg) brightness(99%) contrast(89%);
    `}
`; 

export const ButtonDislike = styled(ButtonLike)`
  background-image: url(/image/dislike.svg);
  /* filter: invert(86%) sepia(75%) saturate(2848%) hue-rotate(358deg) brightness(99%) contrast(89%); */
  ${({ applyFilter }) =>
    applyFilter &&
    `
      filter: invert(56%) sepia(75%) saturate(2848%) hue-rotate(358deg) brightness(99%) contrast(89%);
    `}
`;


export const ButtonComment = styled.button`
  width: 19.72px;
  height: 19.72px;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-image: url(/image/comments.svg);
`;

export const Score = styled.p`
  font-family: IBM Plex Sans;
  font-size: 10.5px;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: center; 
  color: #6F6F6F;
 
`;

export default function CardMessage(post) {

  return (
    <ContainerMessage key={post.id}>

      <TextUserCreator>Enviado por: {post.creator.name}</TextUserCreator>

      <MessageContent>
        {post.content}
      </MessageContent>

      <MessageStatus>
        
        <ContainerButtonLiked>
        
          <ButtonLike applyFilter={post?.liked==="like"?true:false}>

          </ButtonLike>
        
          <Score>{+post.likes - +post.dislikes}</Score>
        
          <ButtonDislike applyFilter={post?.liked==="dislike"?true:false}>

          </ButtonDislike>
        
        </ContainerButtonLiked>

        <ContainerButtonComment>
          <ButtonComment>
            <svg src="/image/comments.svg" alt="" />
          </ButtonComment>
          <Score>{post.comments>0?post.comments:0}</Score>
        </ContainerButtonComment>

      </MessageStatus>

      {/* <p>liked {post.liked}</p> */}

    </ContainerMessage>
  )
}