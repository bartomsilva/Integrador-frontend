import axios from "axios";
import { createContext, useState } from "react";
import { BASE_URL } from "../constants/constants";
import { handleHome } from "../router/cordinator";
import Swal from "sweetalert2";

export const LabedditContext = createContext()

export default function LabedditProvider({ children }) {

  // usuário logado
  const [userLoged, setUserLoged] = useState()
  // post selecionado
  const [postSelect, setPostSelect] = useState()
  // reload - refaz avisa sobre alteração nas tabelas
  const [reload, setReload] = useState(false)

  // delete POST 
  const deletePostComment = async (input) => {
    const postId = input.postId
    const PATH = BASE_URL + "/" + input.action + "/" + postId
    const token = getToken()
    try {
      const result = await axios.delete(PATH, {
        headers: {
          Authorization: token,
        },
      });
      setReload(!reload)
      return result
    } catch (error) {
      if (error.response) {
        modal("Servidor Off", `Status: ${error.response.status}`, "error")
      } else if (error.request) {
        modal("Não Responde", "Verifique a sua conexão!", "error")
      } else {
        modal("Erro na requisição", error.message, "error")
      }
    }
  }

  // edit POST 
  const editPostComment = async (input) => {
    const postId = input.postId
    const body = { content: input.content }
    const PATH = BASE_URL + "/" + input.action + "/" + postId
    const token = getToken()
    try {
      const result = await axios.put(PATH, body, {
        headers: {
          Authorization: token,
        },
      });
      setReload(!reload)
      return result
    } catch (error) {
      if (error.response) {
        modal("Servidor Off", `Status: ${error.response.status}`, "error")
      } else if (error.request) {
        modal("Não Responde", "Verifique a sua conexão!", "error")
      } else {
        modal("Erro na requisição", error.message, "error")
      }
    }
  }
  
  // create post
  const sendPost = async (input, action) => {
    const token = getToken();
    console.log(input)
    const body = {
      content: input.content,
    };

    let PATH=""
    if (action=="comments"){
       PATH = BASE_URL + "/comments/"+input.postId
    }else {
      PATH = BASE_URL + "/posts"
    }

    try {
      const result = await axios.post(PATH, body, {
        headers: {
          Authorization: token,
        },
      });
      setReload(!reload)
      return result
    } catch (error) {
      if (error.response) {
        modal(error.response.data.message, "", "error")
      } else if (error.request) {
        modal("Não Responde", "Verifique a sua conexão!", "error")
      } else {
        modal("Erro na requisição", error.message, "error")
      }
    }
  };

  // efetua o like ou dislike
  const sendLike = async (postId, action, like) => {
    const body = { action, like };
    const PATH = BASE_URL + "/likes/" + postId;
    const token = getToken();
    let response=false
    try {
      await axios.put(PATH, body, {
        headers: {
          Authorization: token,
        },
      });
      response=true
    } catch (error) {
      if (error.response) {
        modal("Erro", `Status: ${error.response.data.message}`, "error");
      } else if (error.request) {
        modal("Servidor não Responde", "Check sua conexão", "error");
      } else {
        modal("Solicitação inválida", error.message, "error");
      }
    }
    console.log(response)
    return response
  };

  // efetuar login
  const checkLogin = async () => {
    const PATH = BASE_URL + "/users/checkLogin"
    const token = getToken()
    let result = false
    await axios.post(PATH, null, {
      headers: {
        Authorization: token,
      },
    })
      .then(response => {
        setUserLoged(response.data)
        result = true
      })

    return result
  }
  // efetuar login
  const userLogin = async (input) => {
    const PATH = BASE_URL + "/users/login"
    //localStorage.removeItem('token')
    await axios.post(PATH, input)
      .then(response => {
        setToken(response.data.token)
        setUserLoged(response.data.user)
      })
      .catch(error => {
        if (error.response) {
          modal("Email ou senha inválida", "", "error")
        } else {
          modal("Sistema indisponível", "tente mais tarde", "error")
        }
      })
  }

  // efetuar signup
  const userSingup = async (input) => {
    const PATH = BASE_URL + "/users/singup"
    //localStorage.removeItem('token')
    await axios.post(PATH, input)
      .then(response => {
        setToken(response.data.token)
        setUserLoged(response.data.user)
      })
      .catch(error => {
        if (error.response) {
          const msgError = error.response.data.message
          modal("Dados inválidos", msgError, "error")
        } else {
          modal("Sistema indisponível", "tente mais tarde", "error")
        }
      })
  }

  // paga o token
  const resetToken = () => {
    localStorage.removeItem("token")
  }

  // efetua o logof do usuário
  const logout = (navigate) => {
    resetToken()
    handleHome(navigate)
    setUserLoged(null)
  }

  // salvar o toke
  const setToken = (token) => {
    localStorage.setItem("token", token)
  }

  function getToken() {
    return localStorage.getItem("token")
  }

  function modal(title, text, icon) {
    Swal.fire({ title, text, icon })
  }


  const context = {
    logout,
    userLogin,
    userSingup,
    userLoged,
    getToken,
    resetToken,
    sendLike,
    sendPost,
    postSelect,
    setPostSelect,
    editPostComment,
    deletePostComment,
    modal,
    checkLogin
   
  }

  return (
    <LabedditContext.Provider value={context}>
      {children}
    </LabedditContext.Provider>
  )

}