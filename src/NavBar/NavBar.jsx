import React from 'react';
import './NavBar.css'
import {Link, useNavigate} from 'react-router-dom';


const NavBar = () => {
    const navigate = useNavigate()

    return (
        <div className="nav">
            <header className="container">
                <nav>
                    <ul>
                        <Link to="/listFilms" className="logo">КИНОПОИСК</Link>
                        <li style={{paddingTop: '7px'}}>
                            <a href="">Онлайн-кинотеатр</a>
                        </li>
                        <li style={{paddingTop: '7px', paddingLeft: '15px'}}>
                            <a href="">Билеты в кино</a>
                        </li>
                        <li style={{paddingTop: '3px', paddingLeft: '10px'}}>
                            <input type="text" placeholder="Фильмы, сериалы, персоны"/>
                        </li>
                        <li>
                            <button className="btn0" onClick={() => navigate('/login')}>Выйти</button>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default NavBar;