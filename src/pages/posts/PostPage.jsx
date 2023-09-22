import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../constants/constants";
import Header from "../../components/header/Header";
import { LabedditContext } from "../../global/LabedditContext";
import { WrapperPost } from "./styled";
import { useNavigate } from "react-router-dom";
import CardMessagePosts from "../../components/cards/cardmessage/CardMessagePosts";
import TypeMessagePosts from "../../components/cards/typemessage/TypeMessagePosts";

export default function PostPage() {
  const navigate = useNavigate()
  const context = useContext(LabedditContext)
  const [posts, setPosts] = useState()
   // indica o modo do post e do comment
  const [editing,setEditing] = useState(null)


  // carrega os posts
  useEffect(() => {
    getPosts();
  });
  
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
      <TypeMessagePosts />
      {
        posts?.map(post => CardMessagePosts(post,context,posts,setPosts, navigate, editing, setEditing))       
      }
    </WrapperPost>
  )
}

