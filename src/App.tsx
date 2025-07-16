import './App.css';
import * as React from 'react';
import NavBar from "./navBar/NavBar";
import ListFilmBlocks from "./content/readFilm/listFilmBlocks/ListFilmBlocks";
import {BrowserRouter, Routes, Route, Outlet, Navigate} from 'react-router-dom';
import InfoFilmBlocks from "./content/readFilm/infoFilmBlocks/InfoFilmBlocks";
import PageAddFilm from "./content/addFilm/pageAddFilm/PageAddFilm";
import PageEditFilm from "./content/editFilm/pageEditFilm/PageEditFilm";
import Login from "./login/Login";
import Register from "./login/register/Register";
import {AuthGuard} from "./shared/authGuard";

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
                        <Route path="/listFilms" element={<ListFilmBlocks/>}/>

                        <Route path="/listFilms/film/:id" element={<InfoFilmBlocks/>}/>

                        <Route path="/listFilms/addFilm/:id" element={
                            <AuthGuard userRole='admin'>
                                <PageAddFilm/>
                            </AuthGuard>}/>

                        <Route path="/listFilms/editFilm/:id" element={
                            <AuthGuard userRole='admin'>
                                <PageEditFilm/>
                            </AuthGuard>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
