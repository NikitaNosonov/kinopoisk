import React from 'react';
import {Box,} from "@mui/material";
import SearchNavBar from "../searchNavBar/SearchNavBar";
import ResSearchNavBar from "../resSearchNavBar/ResSearchNavBar";
import {Film} from "../../shared/typesData";
import {NavigateFunction} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import "./MobileNavBar.css"


interface MobileNavBarProps {
    search?: boolean,
    setSearch?: (value: (((prevState: boolean) => boolean) | boolean)) => void,
    valueSearch?: string,
    setValueSearch?: (value: (((prevState: string) => string) | string)) => void,
    activeSearch?: boolean,
    setActiveSearch?: (value: (((prevState: boolean) => boolean) | boolean)) => void,
    navigate?: NavigateFunction,
    films?: Film[]
}

const MobileNavBar: React.FC<MobileNavBarProps> = ({
                                                       search,
                                                       setSearch,
                                                       valueSearch,
                                                       setValueSearch,
                                                       activeSearch,
                                                       setActiveSearch,
                                                       navigate,
                                                       films
                                                   }) => {

    return (
        <Box className="mobnav" onClick={() => {
            if (setSearch && setValueSearch) {
                setSearch(false)
                setValueSearch('')
            }
        }}>
            {(!activeSearch) ? <header className="mobcontainer">
                <nav>
                    <ul>
                        <li>
                            <span className="moblogo"
                                  onClick={() => navigate ? navigate('/listFilms') : null}>КИНОПОИСК</span>
                        </li>
                        <li>
                            <SearchIcon className='searchBtn' onClick={() => {
                                if (setActiveSearch) {
                                    setActiveSearch(true)
                                }
                            }}/>
                        </li>
                        <li>
                            <button className="mobbtn0" onClick={() => {
                                localStorage.removeItem('token')
                                localStorage.removeItem('data')
                                if (navigate) {
                                    navigate('/login')
                                }
                            }}>Выйти
                            </button>
                        </li>
                    </ul>
                    <header className="mobcontainer2">
                        <nav>
                            <ul>
                                <li style={{paddingTop: '5px', paddingLeft: '20px'}}>
                                    <a href="">Онлайн-кинотеатр</a>
                                </li>
                                <li style={{paddingTop: '5px', paddingLeft: '15px'}}>
                                    <a href="">Билеты в кино</a>
                                </li>
                            </ul>
                        </nav>
                    </header>
                </nav>
            </header> : <li style={{paddingLeft: '10px'}}>
                <SearchNavBar valueSearch={valueSearch || ''}
                              setValueSearch={setValueSearch || (() => {})}
                              setSearch={setSearch}/>
                <CloseIcon className='closeBtn' onClick={() => {
                    if (setActiveSearch) {
                        setActiveSearch(false)
                    }
                }}/>
                {search ? <ResSearchNavBar films={films}/> :
                    <div style={{background: 'black'}}></div>}

            </li>}
        </Box>
    );
};

export default MobileNavBar;