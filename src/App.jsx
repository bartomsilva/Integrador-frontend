import { useContext, useEffect } from 'react';
import { Router } from './router/Router';
import { LabedditContext } from './global/LabedditContext';


export default function App() {

    const context = useContext(LabedditContext)

    const isHTTPS = window.location.protocol === "https:";
    if (isHTTPS) {
        window.location.href = `http://${window.location.host}${window.location.pathname}`;
    }

    useEffect(() => {
        context.checkLogin()
    }, [])

    return (
        <Router />
    )
}
