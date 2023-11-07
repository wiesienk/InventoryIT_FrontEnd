import React, { useState } from 'react';

type LoginFormProps = {
    onLogin: () => void;
};

type LoginResponseData = {
    token: string;
};

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) =>  {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [badLog, setBadLog] = useState(false);

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ login, pwd: password }),
            });

            const data = await response.json();
            console.log(data);
            if (data.error) {
                setBadLog(true);
                return;
            }
            document.cookie = `jwt=${data.token}; path=/`;

            onLogin();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='addForm'>
            <label>
                Login:
                <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button className='btn' onClick={handleLogin}>Login</button>
            {badLog && (
                <p>Niewłaściwy login lub hasło..</p>
            )}
        </div>
    );
};