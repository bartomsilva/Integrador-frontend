import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageNotFound } from "../pages/notFound/notFound";

export function Router() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/signup' element={<SingupPage/>}/>
                <Route path='/posts' element={<PostsPage/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}