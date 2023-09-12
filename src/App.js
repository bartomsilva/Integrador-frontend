import './App.css';
import { styled } from "styled-components";
import { Router } from './router/Router';

const Labeddit = styled.div`
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`
function App() {
    return (
        <Labeddit>
            <Router />
        </Labeddit>
    );
}

export default App;
