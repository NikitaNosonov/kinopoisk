import React from 'react';
import './NavBar.css'
import {useNavigate} from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import {Film, token} from '../shared/typesData'
import SearchNavBar from "./searchNavBar/SearchNavBar";
import ResSearchNavBar from "./resSearchNavBar/ResSearchNavBar";

const NavBar: React.FC = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [valueSearch, setValueSearch] = React.useState("");
    const [films, setFilms] = React.useState<Film[]>([]);
    const [search, setSearch] = React.useState(false);

    React.useEffect(() => {

        const timer = setTimeout(async () => {
            try {
                const res = await fetch(
                    `https://246b98815ac8edb9.mokky.dev/listFilms?firstName=${valueSearch}`,
                    {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token')}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
                const data = await res.json();
                setFilms(data);
            } catch (error) {
                console.error('Ошибка загрузки:', error);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [valueSearch]);

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
        <div className="nav" onClick={() => {
            setSearch(false)
            setValueSearch('')
        }}>
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
                            <SearchNavBar valueSearch={valueSearch}
                                          setValueSearch={setValueSearch}
                                          setSearch={setSearch}/>
                            {search ? <ResSearchNavBar films={films}/> :
                                <div style={{background: 'black'}}></div>}
                        </li>
                        <li>
                            <button className="btn0" onClick={() => {
                                localStorage.removeItem('token')
                                navigate('/login')
                            }}>Выйти
                            </button>
                        </li>
                        <li style={{paddingLeft: '4px', paddingTop: '7px'}}>
                            <a href="">{token ? jwtDecode<token>(token).email : ''}</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default NavBar;