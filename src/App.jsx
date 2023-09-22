import { Router } from './router/Router';
import { styled } from "styled-components";
import LabedditProvider from './global/LabedditContext';


const Labeddit = styled.div`
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`
export default function App() {

    return (
        <Labeddit>
            <LabedditProvider>
                <Router />
            </LabedditProvider>
        </Labeddit>
    );
}
