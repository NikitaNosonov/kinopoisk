import React from 'react';
import {Button, TextField} from "@mui/material";
import './Register.css'
import {useNavigate} from "react-router-dom";

const Register: React.FC = () => {
    const [dataUser, setDataUser] = React.useState({email: '', password: '',});
    const [error, setError] = React.useState('');
    const navigate = useNavigate();

    const register = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (!dataUser.email || !dataUser.password) {
            setError('**Поле обязательно для заполнения**')
        } else {
            const response =await fetch("https://246b98815ac8edb9.mokky.dev/register", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: dataUser.email,
                    password: dataUser.password,
                    role: "user"
                }),
            });
            const res = await response.json()

            console.log(res)

            navigate('/login')
            setDataUser({email: "", password: "",});
        }
    }

    return (
        <div className='login'>
            <div className='login block'>
                <div className='title'>Заполните учетные данные</div>
                <TextField
                    value={dataUser.email}
                    onChange={(e) => setDataUser({...dataUser, email: e.target.value})}
                    className='input'
                    type='text'
                    placeholder='Придумайте логин'/>
                {(!dataUser.email) ? error && <div className="alertDanger"><i>{error}</i></div> : null}
                <TextField
                    value={dataUser.password}
                    onChange={(e) => setDataUser({...dataUser, password: e.target.value})}
                    className='input'
                    type='password'
                    placeholder='Придумайте пароль'/>
                {(!dataUser.password) ? error && <div className="alertDanger"><i>{error}</i></div> : null}
                <div className='btns'>
                    <Button className='btn1' variant="contained" color="primary" type="submit"
                            onClick={register}>Зарегистрироваться</Button>
                    <Button className='btn2' variant="contained" color="error" type="submit"
                            onClick={() => navigate('/login')}>Назад</Button>
                </div>
            </div>
        </div>
    );
};

export default Register;