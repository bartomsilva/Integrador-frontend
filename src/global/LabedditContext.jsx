import { createContext, useState } from "react";

export const LabedditContext = createContext()

export default function LabedditProvider({ children }) {
  
  // fluxo:=> - login - singup - post - comments
  const [flow, setFlow] = useState("login")

  // usuário logado
  const [userLoged, setUserLoged] = useState("")

  // efetua o logof do usuário
  const logout = () => {
    localStorage.removeItem("token")
  }

  const context = {    
    flow,
    setFlow,
    logout
  }
  
  return (
    <LabedditContext.Provider value={context}>
      {children}
    </LabedditContext.Provider>
  )
}