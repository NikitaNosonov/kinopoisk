import React from 'react';
import './NavBar.css'
import {useNavigate} from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import {token} from '../shared/typesData'


const NavBar: React.FC = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const navigation = () => {
        if (token) {
            const tokenDec = jwtDecode<token>(token);
            if (tokenDec.role === "admin") {
                navigate('/admin/listFilms');
            } else if (tokenDec.role === "user") {
                navigate('/listFilms');
            }
        }
    }

    if (!token) {
        alert("Время сессии истекло")
        navigate('/login');
    }

    return (
        <div className="nav">
            <header className="container">
                <nav>
                    <ul>
                        <li>
                            <span className="logo" onClick={navigation}>КИНОПОИСК</span>
                        </li>
                        <li style={{paddingTop: '7px'}}>
                            <a href="">Онлайн-кинотеатр</a>
                        </li>
                        <li style={{paddingTop: '7px', paddingLeft: '15px'}}>
                            <a href="">Билеты в кино</a>
                        </li>
                        <li style={{paddingTop: '3px', paddingLeft: '10px'}}>
                            <input type="text" placeholder="Фильмы, сериалы, персоны"/>
                        </li>
                        <li style={{paddingLeft: '10px', paddingTop: '7px'}}>
                            <a href="">{token ? jwtDecode<token>(token).email : ''}</a>
                        </li>
                        <li>
                            <button className="btn0" onClick={() => {
                                localStorage.removeItem('token')
                                navigate('/login')
                            }}>Выйти
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default NavBar;