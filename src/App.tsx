import './App.css';
import * as React from 'react';
import NavBar from "./pages/navBar/NavBar";
import ListFilmBlocks from "./pages/readFilm/listFilmBlocks/ListFilmBlocks";
import {BrowserRouter, Routes, Route, Outlet, Navigate} from 'react-router-dom';
import InfoFilmBlocks from "./pages/readFilm/infoFilmBlocks/InfoFilmBlocks";
import PageAddFilm from "./pages/addFilm/pageAddFilm/PageAddFilm";
import PageEditFilm from "./pages/editFilm/pageEditFilm/PageEditFilm";
import Login from "./pages/loginPage/Login";
import Register from "./pages/loginPage/registerPage/Register";
import {AuthGuard} from "./authGuard";

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
                <Route path="/register" element={<Register/>}/>

                <Route element={<NavbarLayout/>}>
                        <Route path="/listFilms" element={<ListFilmBlocks/>}/>

                        <Route path="/film/:id" element={<InfoFilmBlocks/>}/>

                        <Route path="/addFilm/:id" element={
                            <AuthGuard userRole='admin'>
                                <PageAddFilm/>
                            </AuthGuard>}/>

                        <Route path="/editFilm/:id" element={
                            <AuthGuard userRole='admin'>
                                <PageEditFilm/>
                            </AuthGuard>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
