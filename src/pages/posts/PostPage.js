import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";

export const WrapperPost = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-around;
  max-width: 428px;
  min-height: 100vh;
`;
export const ContainerPost = styled.div`
  max-width: 400px;
  min-height: fit-content;
  background-color: rgba(0,0,0,.1);
  border: 1px solid rgba(0,0,0,0.4);
  padding: 10px;
  margin: 10px 0px;
  border-radius: 4px;
`;

export const ContainerPostStatus = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  min-height: fit-content;
  padding: 10px;
`;
export default function PostPage() {

  const BASE_URL = "http://127.0.0.1:3003/posts"
  const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhmZDQyOWRmLWMyM2EtNDllMy1hZmQ1LTEzZDY0NGQ1MTAyMiIsIm5hbWUiOiJiYXJ0MTAwIiwicm9sZSI6Ik5PUk1BTCIsImlhdCI6MTY5NDgzOTY0OSwiZXhwIjoxNjk1NDQ0NDQ5fQ.gUAaadr0wvKDl8XZvmFH6MUKSat1iR8aapaAmO52moU"

  const [posts, setPosts] = useState()

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const res =
        await axios
          .get(BASE_URL, {
            headers: {
              Authorization: AUTH_TOKEN,
            },
          }
          )
      setPosts(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const renderData = (post) => {
    return (
      <ContainerPost key={post.id}>
        <p>Criador: {post.creator.name}</p>
        <p>{post.content}</p>
        <ContainerPostStatus>
          <button>like</button>
          <p>{+post.likes - +post.dislikes}</p>
          <button>dislike</button>
          <p>comments {post.comments}</p>
        </ContainerPostStatus>
        <p>liked {post.liked}</p>
      </ContainerPost>
    )
  }

  return (
    <WrapperPost>
      <h1>Posts</h1>
      {
        posts?.map(post => renderData(post)
        )
      }
    </WrapperPost>
  )

}

