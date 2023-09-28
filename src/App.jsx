import { Router } from './router/Router';
import { styled } from "styled-components";
import { LabedditContext } from "./global/LabedditContext";

const Labeddit = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export default function App() {

    return (
        <Router />
    )
}
