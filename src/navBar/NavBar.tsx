import React from 'react';
import DesktopNavBar from "./desktopNavBar/DesktopNavBar";
import "./NavBar.css"
import MobileNavBar from "./mobileNavBar/MobileNavBar";
import filmStore from "../shared/filmStore";
import {Film, UserData} from "../shared/typesData";
import {useNavigate} from "react-router-dom";

const NavBar = () => {
    const token = filmStore.getCookie('token')
    const userDataStr = localStorage.getItem('data');
    const userData = userDataStr ? JSON.parse(userDataStr) as UserData : null;
    const navigate = useNavigate()
    const [valueSearch, setValueSearch] = React.useState("");
    const [films, setFilms] = React.useState<Film[]>([]);
    const [search, setSearch] = React.useState(false);
    const [activeSearch, setActiveSearch] = React.useState(false);

    React.useEffect(() => {

        const timer = setTimeout(async () => {
            try {
                const res = await fetch(
                    `https://246b98815ac8edb9.mokky.dev/listFilms?firstName=${valueSearch}`,
                    {
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
                const data = await res.json();
                console.log(res);
                setFilms(data);
            } catch (error) {
                console.error('Ошибка загрузки:', error);
            }
        }, 700);

        return () => clearTimeout(timer);
    }, [valueSearch]);

    if (!token) {
        alert("Авторизируйтесь!")
        navigate('/login');
    }

    return (
        <>
            <div className="desktop">
                <DesktopNavBar userData={userData} films={films} search={search} setSearch={setSearch} valueSearch={valueSearch}
                               setValueSearch={setValueSearch} activeSearch={activeSearch}
                               setActiveSearch={setActiveSearch} navigate={navigate}/>
            </div>
            <div className="mobile">
                <MobileNavBar films={films} search={search} setSearch={setSearch} valueSearch={valueSearch}
                              setValueSearch={setValueSearch} activeSearch={activeSearch}
                              setActiveSearch={setActiveSearch} navigate={navigate}/>
            </div>
        </>
    );
};

export default NavBar;