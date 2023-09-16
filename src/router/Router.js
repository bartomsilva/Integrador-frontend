import { Routes, Route } from "react-router-dom";
import { PageNotFound } from "../pages/notFound/notFound";
import LoginPage from "../pages/login/loginPage";
import SingupPage from "../pages/singup/SingupPage";
import PostPage from "../pages/posts/PostPage";

export function Router() {
    return (

        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/singup' element={<SingupPage />} />
            <Route path='/posts' element={<PostPage />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}