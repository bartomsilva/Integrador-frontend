import './App.css';
import Header from './components/header/Header';
import LoginPage from './pages/login/loginPage';
import { styled } from "styled-components";

const Labeddit = styled.div`
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`
function App() {
    return (
        <Labeddit>
            <LoginPage />
        </Labeddit>
    );
}

export default App;
