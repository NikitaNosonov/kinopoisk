import React from 'react';
import {Button, TextField} from "@mui/material";
import './Login.css'
import {useNavigate} from "react-router-dom";
import {jwtDecode} from 'jwt-decode';
import {token} from '../shared/typesData'


const Login: React.FC = () => {
    const [dataUser, setDataUser] = React.useState({username: "", password: "",});
    const [error, setError] = React.useState('');
    const navigate = useNavigate();

    const login = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (!dataUser.username || !dataUser.password) {
            setError('**Поле обязательно для заполнения**')
        } else {
            const response = await fetch('https://246b98815ac8edb9.mokky.dev/auth', {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: dataUser.username,
                    password: dataUser.password
                }),
            });
            const res = await response.json()
            localStorage.setItem('token', res.token)
            const token = jwtDecode<token>(res.token)

            if (token.role === 'admin' && token.username === dataUser.username) {
                navigate('/admin/listFilms')
            } else if (token.role === 'user' && token.username === dataUser.username) {
                navigate('/listFilms')
            }
            setDataUser({username: "", password: "",});
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
                    type='text'
                    placeholder='Логин'/>
                {(!dataUser.username) ? error && <div className="alertDanger"><i>{error}</i></div> : null}
                <TextField
                    value={dataUser.password}
                    onChange={(e) => setDataUser({...dataUser, password: e.target.value})}
                    className='input'
                    type='password'
                    placeholder='Пароль'/>
                {(!dataUser.password) ? error && <div className="alertDanger"><i>{error}</i></div> : null}
                <div className='btns'>
                    <Button className='btn1' variant="contained" color="primary" type="submit"
                            onClick={login}>Войти</Button>
                    <Button className='btn2' variant="contained" color="primary" type="submit"
                            onClick={() => navigate('/login/register')}>Зарегистрироваться</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;