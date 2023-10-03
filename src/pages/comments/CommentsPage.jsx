import Header from "../../components/header/Header";
import CardMessageComments from "../../components/cards/cardmessage/CardMessageComments";
import { WrapperComments } from "./styled";
import { useContext, useEffect, useState } from "react";
import { LabedditContext } from "../../global/LabedditContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";
import TypeMessageComments from "../../components/cards/typemessage/TypeMessagecomments";
import CardMessagePosts from "../../components/cards/cardmessage/CardMessagePosts";

export default function CommentsPage() {

  const context = useContext(LabedditContext)
  const navigate = useNavigate()
  const { postSelect, setPostSelect } = context
  const [comments, setComments] = useState([])

  // indica se já faz a leitura dos posts
  const [isLoading, setIsLoading] = useState(false)

  // indica o modo do post e do comment
  const [editing, setEditing] = useState(null)

  // carrega os comentários
  useEffect(() => {
    getComments();
  }, [context]);
  // }, [editing, comments, context]);
  const getComments = async () => {
    const token = context.getToken()
    setIsLoading(true)
    try {
      const res =
        await axios
          .get(BASE_URL + "/comments/" + context.postSelect[0].id, {
            headers: {
              Authorization: token
            }
          })
      setComments(res.data);
    } catch (error) {
      // console.log(error)
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <>
      <Header />
      <WrapperComments>
        {
          CardMessagePosts(postSelect[0], context, postSelect, setPostSelect, navigate, editing, setEditing)
        }
        <TypeMessageComments />
        {
          isLoading
            ?
            <img src="/image/loading.gif"></img>
            :
            comments?.map((comment) => CardMessageComments(comment, context, comments, setComments, editing, setEditing, postSelect[0]))
        }
      </WrapperComments>
    </>
  )
}
