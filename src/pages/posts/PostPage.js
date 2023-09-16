import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import TypeMessage from "../../components/cards/TypeMessage";
import Header from "../../components/header/Header";
import CardMessage from "../../components/cards/CardMessage";

export const WrapperPost = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  align-items: center;
  width: 428px;
  min-height: 100vh;
  border: 1px dotted red;
`;


export default function PostPage() {

  const BASE_URL = "http://127.0.0.1:3003/posts"
  const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDJhMWZhLTkzM2EtNDdkZS05MmVhLWRjMzA0YmVjOGNhMyIsIm5hbWUiOiJiYXJ0MTAwIiwicm9sZSI6Ik5PUk1BTCIsImlhdCI6MTY5NDkwMzM3NywiZXhwIjoxNjk1NTA4MTc3fQ.5v_RS4C4WjFTsgNfeH3BZj8hW5DzWLrsn4-O5FUQMn0"

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

  console.log(posts)

  return (
    <WrapperPost>
      <Header/>
      <TypeMessage/>
      {
        posts?.map(post => CardMessage(post)
        )
      }
    </WrapperPost>
  )

}

