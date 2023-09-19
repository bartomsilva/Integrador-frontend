import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { BASE_URL } from "../../constants/constants";
import TypeMessage from "../../components/Cards/typeMessage";
import Header from "../../components/Header/header";
import CardMessage from "../../components/Cards/cardMessage";
import { LabedditContext } from "../../global/labedditContext";

export const WrapperPost = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  align-items: center;
  width: 428px;
  min-height: 100vh;
`;

export default function PostPage() {

  const navigate = useNavigate()
  const context = useContext(LabedditContext)
  const [posts, setPosts] = useState()

  // carrega os posts
  useEffect(() => {
    getPosts();
  }, []);
  
 
  const getPosts = async () => {
    const token = context.getToken()
    try {
      const res =
        await axios
          .get(BASE_URL + "/posts", {
            headers: {
              Authorization: token
            }
          })
      setPosts(res.data);
    } catch (error) { }
  };

  return (
    <WrapperPost>
      <Header />
      <TypeMessage />
      {
        posts?.map(post => CardMessage(post,context,posts,setPosts))       
      }
    </WrapperPost>
  )

}

