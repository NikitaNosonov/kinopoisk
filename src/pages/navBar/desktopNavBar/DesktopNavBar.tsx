import React from 'react';
import './DesktopNavBar.css'
import {NavigateFunction, useNavigate} from 'react-router-dom';
import {Film, UserData} from '../../../types/typesData'
import SearchNavBar from "../searchNavBar/SearchNavBar";
import ResSearchNavBar from "../resSearchNavBar/ResSearchNavBar";
import filmStore from "../../../store/filmStore";
import {Box} from "@mui/material";

interface DesktopNavBarProps {
    search?: boolean,
    setSearch?: (value: (((prevState: boolean) => boolean) | boolean)) => void,
    valueSearch?: string,
    setValueSearch?: (value: (((prevState: string) => string) | string)) => void,
    activeSearch?: boolean,
    setActiveSearch?: (value: (((prevState: boolean) => boolean) | boolean)) => void,
    navigate?: NavigateFunction,
    films?: Film[],
    userData?: UserData | null
}

const DesktopNavBar: React.FC<DesktopNavBarProps> = ({
                                                         search,
                                                         setSearch,
                                                         valueSearch,
                                                         setValueSearch,
                                                         activeSearch,
                                                         setActiveSearch,
                                                         navigate,
                                                         films,
                                                         userData
                                                     }) => {

    return (
        <Box className="nav" onClick={() => {
            if (setSearch && setValueSearch) {
                setSearch(false)
                setValueSearch('')
            }
        }}>
            <header className="container">
                <nav>
                    <ul>
                        <li>
                            <span className="logo"
                                  onClick={() => navigate ? navigate('/listFilms') : null}>КИНОПОИСК</span>
                        </li>
                        <li style={{paddingTop: '7px'}}>
                            <a href="">Онлайн-кинотеатр</a>
                        </li>
                        <li style={{paddingTop: '7px', paddingLeft: '15px'}}>
                            <a href="">Билеты в кино</a>
                        </li>
                        <li style={{paddingTop: '3px', paddingLeft: '10px'}}>
                            <SearchNavBar valueSearch={valueSearch || ''}
                                          setValueSearch={setValueSearch || (() => {
                                          })}
                                          setSearch={setSearch}/>
                            {search ? <ResSearchNavBar films={films}/> :
                                <div style={{background: 'black'}}></div>}
                        </li>
                        <li>
                            <button className="btn0" onClick={() => {
                                localStorage.removeItem('token')
                                localStorage.removeItem('data')
                                if (navigate) {
                                    navigate('/login')
                                }
                            }}>Выйти
                            </button>
                        </li>
                        <li style={{paddingLeft: '4px', paddingTop: '7px'}}>
                            <a href="">{userData ? userData.email : ''}</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </Box>
    );
};

export default DesktopNavBar;