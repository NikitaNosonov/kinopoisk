import React from 'react';
import {Button, TextField} from "@mui/material";
import './Login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className='login block'>
                <div className='title'>ВХОД</div>
                <TextField
                    className='input'
                    placeholder='Логин'/>
                <TextField
                    className='input'
                    placeholder='Пароль'/>
                <Button className='btn' variant="contained" color="primary" type="submit">Войти</Button>
            </div>
        </div>
    );
};

export default Login;