import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import './Login.css'
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [dataUser, setDataUser] = useState({username: "", password: "", });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        if (!dataUser.username || !dataUser.password) {
            setError('**Поле обязательно для заполнения**')
        } else {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataUser)
                });
                const token= await response.json()

                localStorage.setItem('token', token)
                if (dataUser.username === 'admin') {
                    navigate('/admin/listFilms')
                } else {
                    navigate('/user/listFilms')
                }
        }
    }

    return (
        <div className='login'>
            <div className='login block'>
                <div className='title'>ВХОД</div>
                <TextField
                    value={dataUser.username}
                    onChange={(e) => setDataUser({...dataUser, username: e.target.value})}
                    className='input'
                    placeholder='Логин'/>
                {(!dataUser.username) ?  error && <div className="alertDanger"><i>{error}</i></div> : null}
                <TextField
                    value={dataUser.password}
                    onChange={(e) => setDataUser({...dataUser, password: e.target.value})}
                    className='input'
                    placeholder='Пароль'/>
                {(!dataUser.password) ?  error && <div className="alertDanger"><i>{error}</i></div> : null}
                <Button className='btn' variant="contained" color="primary" type="submit" onClick={login}>Войти</Button>
            </div>
        </div>
    );
};

export default Login;