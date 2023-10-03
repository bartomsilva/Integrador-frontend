import { Routes, Route, Navigate, BrowserRouter, useNavigate } from "react-router-dom";
import { LabedditContext } from "../global/LabedditContext";
import { PageNotFound } from "../pages/notFound/NotFound";
import SignupPage from "../pages/signup/SignupPage";
import LoginPage from "../pages/login/LoginPage";
import PostPage from "../pages/posts/PostPage";
import { useContext } from "react";
import CommentsPage from "../pages/comments/CommentsPage";

export function Router() {
    const context = useContext(LabedditContext)

    function RedirectLogin({ children, redirectTo }) {
        const loged = context.userLoged != null
        return (!loged) ? children : <Navigate to={redirectTo} />
    }
    function ProtectedRoute({ children, redirectTo }) {
        const loged = context.userLoged != null
        return (loged) ? children : <Navigate to={redirectTo} />
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <RedirectLogin redirectTo={'/posts'}>
                        <LoginPage />
                    </RedirectLogin >}
                />
                <Route path='/singup' element={
                    <RedirectLogin redirectTo={'/posts'}>
                        <SignupPage />
                    </RedirectLogin >}
                />
                <Route path={"/posts"} element={
                    <ProtectedRoute redirectTo={'/'}>
                        <PostPage />
                    </ProtectedRoute>}
                />
                <Route path={"/comments"} element={
                    <ProtectedRoute redirectTo={'/'}>
                        <CommentsPage />
                    </ProtectedRoute>}
                />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>

    )
}