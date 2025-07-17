import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import './Login.css'
import {useNavigate} from "react-router-dom";
import filmStore from "../shared/filmStore";

const Login: React.FC = () => {
    const [dataUser, setDataUser] = React.useState({email: "", password: "",});
    const [error, setError] = React.useState('');
    const navigate = useNavigate();

    React.useEffect(() => {
        if (filmStore.getCookie('token')) {
            localStorage.removeItem('data');
            filmStore.deleteCookie('token');
        }
    }, [])

    const login = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (!dataUser.email || !dataUser.password) {
            setError('**Поле обязательно для заполнения**')
        } else {
            const response = await fetch('https://246b98815ac8edb9.mokky.dev/auth', {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: dataUser.email,
                    password: dataUser.password
                }),
            });
            const res = await response.json()
            const status = await response.status;
            console.log(status);
            if (status === 201) {
                filmStore.setCookie('token', res.token);
                localStorage.setItem('data', JSON.stringify(res.data))
                navigate('/listFilms')
            } else {
                alert("Неверный логин или пароль")
            }
            setDataUser({email: "", password: "",});
        }
    }

    return (
        <div className='login'>
            <div className='block'>
                <Typography className='title'>ВХОД</Typography>
                <TextField
                    value={dataUser.email}
                    onChange={(e) => setDataUser({...dataUser, email: e.target.value})}
                    className='input'
                    type='text'
                    placeholder='Логин'/>
                {(!dataUser.email) ? error && <div className="alertDanger"><i>{error}</i></div> : null}
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