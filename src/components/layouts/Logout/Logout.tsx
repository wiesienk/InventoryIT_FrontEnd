import React, {useEffect} from 'react';

type LogoutFormProps = {
    onLogout: () => void;
};

export const Logout:React.FC<LogoutFormProps> = ({ onLogout } ) => {
    useEffect(() => {
       (async()=>await fetch(`https://http://localhost:3001/auth/logout`))()
    }, []);
    window.location.href = "/";
    onLogout()
    return <>Wylogowano</>
}