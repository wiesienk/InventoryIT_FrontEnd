import React, {useEffect} from 'react';

type LogoutFormProps = {
    onLogout: () => void;
};

export const Logout:React.FC<LogoutFormProps> = ({ onLogout } ) => {
    useEffect(() => {
       (async()=>await fetch(`https://http://localhost:3001/auth/logout`))()
    }, []);
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/";
    onLogout()
    return <>Wylogowano</>
}