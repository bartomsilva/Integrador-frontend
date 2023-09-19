import { useEffect } from 'react';
import { Router } from './router/router';
import { styled } from "styled-components";


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
