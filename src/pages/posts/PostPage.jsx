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

  // indica se já faz a leitura dos posts
  const [isLoading, setIsLoading] = useState()

  // post lidos
  const [posts, setPosts] = useState()

  // indica o modo do post e do comment
  const [editing, setEditing] = useState(null)
  
  // carrega os posts
  useEffect(() => {
    getPosts();
  }, [context]);

  const getPosts = async () => {
    const token = context.getToken() || "not-loged"
    setIsLoading(true)
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
    finally{
      setIsLoading(false)
    }
  };

  return (
    <>
      <Header />
      <WrapperPost>
        <TypeMessagePosts />
        {
          isLoading ? <img src="/image/loading.gif"></img> :

            posts?.map(post => CardMessagePosts(
              post,
              context,
              posts, setPosts,
              navigate,
              editing, setEditing))
        }
      </WrapperPost>
    </>
  )
}

// mostra o número de likes e dislikes no console
export function infoLikes(post) {
  console.log(post.likes, "-", post.dislikes)
}

// atualizar status do textArea
export const handlePostComment = (e, setEditing) => {
  setEditing(prevState => ({
    ...prevState,
    content: e
  }))
}

// atualiza o status do like na tela
export const updateLocalStatusLike = (post, action, posts, setPosts) => {
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
      }
    }
    return post
  });
  setPosts(updatedPosts)

}