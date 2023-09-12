import './App.css';
import Header from './components/header/Header';
import LoginPage from './pages/login/loginPage';
import { styled } from "styled-components";
import SingupPage from './pages/singup/SingupPage';

const Labeddit = styled.div`
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`
function App() {
    return (
        <Labeddit>
            {/* <LoginPage /> */}
            <SingupPage />
        </Labeddit>
    );
}

export default App;
