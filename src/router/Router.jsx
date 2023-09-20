import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { PageNotFound } from "../pages/NotFound/notFound";
import SingupPage from "../pages/singup/SingupPage";
import PostPage from "../pages/Posts/postPage";
import { useContext } from "react";
import { LabedditContext } from "../global/LabedditContext";

export function Router() {

    const context =useContext(LabedditContext)

    function ProtectedRoute({ children, redirectTo }) {
        const token = localStorage.getItem('token') !== null
        const loged = context.userLoged !=null
        return (token && loged) ? children : <Navigate to={redirectTo} />
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Loin />} />
                <Route path='/singup' element={<SingupPage />} />
                <Route path={"/posts"} element={
                    <ProtectedRoute redirectTo={'/'}>
                        <PostPage />
                    </ProtectedRoute>} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>

    )
}