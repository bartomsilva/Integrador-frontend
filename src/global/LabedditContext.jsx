import { createContext, useState } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import { handleHome } from "../router/cordinator";

export const LabedditContext = createContext()
export default function LabedditProvider({ children }) {

  // fluxo:=> - login - singup - post - comments
  const [flow, setFlow] = useState("login")

  const JWT_KEY = "exemplo-de-senha-jwt"

  // usuário logado
  const [userLoged, setUserLoged] = useState()

  // efetuar login
  const userLogin = async (input) => {
    const PATH = BASE_URL + "/users/login"
    localStorage.removeItem('token')
    await axios.post(PATH, input)
      .then(response => {
        setToken(response.data.token)
        setUserLoged(response.data.user)
      })
      .catch(error => {
        if (error.response) {
          swal("Email ou senha inválida", "", "error")
        } else {
          swal("Sistema indisponível", "tente mais tarde", "error")
        }
      })
  }

  // efetuar login
  const userSingup = async (input) => {
    const PATH = BASE_URL + "/users/singup"
    localStorage.removeItem('token')
    await axios.post(PATH, input)
      .then(response => {
        setToken(response.data.token)
        setUserLoged(response.data.user)
      })
      .catch(error => {
        if (error.response) {    
          const msgError = error.response.data.message
          swal("Dados inválidos", msgError, "error")
        } else {
          swal("Sistema indisponível", "tente mais tarde", "error")
        }
      })
    
      

  }

  // efetua o logof do usuário
  const logout = (navigate) => {
    localStorage.removeItem("token")
    handleHome(navigate)
    setUserLoged(null)
  }

  // create post
  const sendPost = async (input) => {
    const body = input;
    const PATH = BASE_URL + "/posts"
    const token = getToken();
    try {
      const result = await axios.post(PATH, body, {
        headers: {
          Authorization: token,
        },
      });
      return result     
    } catch (error) {
      if (error.response) {
        swal("Server Error", `Status: ${error.response.status}`, "error");
      } else if (error.request) {
        swal("No Response", "Check your network connection", "error");
      } else {
        swal("Request Error", error.message, "error");
      }
    }
  };

  // efetua o like ou dislike
  const sendLike = async (postId, action, like) => {
    const body = { action, like };
    const PATH = BASE_URL + "/likes/" + postId;
    const token = getToken();
    try {
      await axios.put(PATH, body, {
        headers: {
          Authorization: token,
        },
      });
      // If the request is successful, you can do something here if needed
    } catch (error) {
      // console.error('Error making like:', error);  
      if (error.response) {
        // The request was made and the server responded with a status code
        swal("Server Error", `Status: ${error.response.status}`, "error");
      } else if (error.request) {
        // The request was made but no response was received
        swal("No Response", "Check your network connection", "error");
      } else {
        // Something happened in setting up the request
        swal("Request Error", error.message, "error");
      }
    }
  };


  // salvar o toke
  const setToken = (token) => {
    localStorage.setItem("token", token)
  }

  function getToken  () {
    return localStorage.getItem("token")
  }


  const context = {
    flow,
    setFlow,
    logout,
    userLogin,
    userSingup,
    getToken,
    userLoged,
    sendLike,
    sendPost

  }

  return (
    <LabedditContext.Provider value={context}>
      {children}
    </LabedditContext.Provider>
  )

}