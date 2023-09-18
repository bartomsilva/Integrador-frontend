import { styled } from "styled-components";
import { Router } from './router/Router';

const Labeddit = styled.div`
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`
export default function App() {

    return (
        <Labeddit>
            <Router />
        </Labeddit>
    );
}
