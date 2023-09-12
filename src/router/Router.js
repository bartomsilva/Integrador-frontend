import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { PageNotFound } from "../pages/notFound/notFound";
import LoginPage from "../pages/login/loginPage";
import SingupPage from "../pages/singup/SingupPage";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/singup' element={<SingupPage/>}/>
                {/* <Route path='/posts' element={<PostsPage/>}/> */}
                {/* <Route path="*" element={<PageNotFound/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}