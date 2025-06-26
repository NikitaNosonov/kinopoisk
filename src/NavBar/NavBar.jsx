import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';


const NavBar = () => {
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
                            <button className="btn0">Расширить<br/>подписку</button>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default NavBar;