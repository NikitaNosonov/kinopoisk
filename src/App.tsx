import './App.css';
import * as React from 'react';
import NavBar from "./navBar/NavBar";
import ListFilmBlocks from "./admin/readFilm/listFilmBlocks/ListFilmBlocks";
import {BrowserRouter, Routes, Route, Outlet, Navigate} from 'react-router-dom';
import InfoFilmBlocks from "./admin/readFilm/infoFilmBlocks/InfoFilmBlocks";
import PageAddFilm from "./admin/addFilm/pageAddFilm/PageAddFilm";
import PageEditFilm from "./admin/editFilm/pageEditFilm/PageEditFilm";
import Login from "./login/Login";
import ListFilmBlocksUser from "./user/readFilm/listFilmBlocks/ListFilmBlocksUser";
import Register from "./login/register/Register";

const NavbarLayout = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    );
};

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace/>}/>

                <Route path="/login" element={<Login/>}/>
                <Route path="/login/register" element={<Register/>}/>

                <Route element={<NavbarLayout/>}>
                        <Route path="/admin/listFilms" element={<ListFilmBlocks/>}/>
                        <Route path="/admin/listFilms/film/:id" element={<InfoFilmBlocks/>}/>
                        <Route path="/admin/listFilms/addFilm/:id" element={<PageAddFilm/>}/>
                        <Route path="/admin/listFilms/editFilm/:id" element={<PageEditFilm/>}/>

                    <Route path="/listFilms" element={<ListFilmBlocksUser/>}/>
                    <Route path="/listFilms/film/:id" element={<InfoFilmBlocks/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
