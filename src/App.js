import './App.css';
import React from "react";
import NavBar from "./NavBar/NavBar";
import ListFilmBlocks from "./Admin/ReadFilm/ListFilmBlocks/ListFilmBlocks";
import {BrowserRouter, Routes, Route, Outlet, Navigate} from 'react-router-dom';
import InfoFilmBlocks from "./Admin/ReadFilm/InfoFilmBlocks/InfoFilmBlocks";
import PageAddFilm from "./Admin/AddFilm/PageAddFilm/PageAddFilm";
import PageEditFilm from "./Admin/EditFilm/PageEditFilm/PageEditFilm";
import Login from "./Login/Login";
import ListFilmBlocksUser from "./User/ReadFilm/ListFilmBlocks/ListFilmBlocksUser";
import Register from "./Login/Register/Register";

const NavbarLayout = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    );
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/login/register" element={<Register/>}/>


                <Route path="/admin/listFilms" element={<NavbarLayout/>}>
                    <Route index element={<ListFilmBlocks/>}/>
                    <Route path="listFilms" element={<ListFilmBlocks/>}/>
                    <Route path="film/:id" element={<InfoFilmBlocks/>}/>
                    <Route path="addFilm/:id" element={<PageAddFilm/>}/>
                    <Route path="editFilm/:id" element={<PageEditFilm/>}/>
                </Route>

                <Route path="/listFilms" element={<NavbarLayout/>}>
                    <Route index element={<ListFilmBlocksUser/>}/>
                    <Route path="listFilms" element={<ListFilmBlocksUser/>}/>
                    <Route path="film/:id" element={<InfoFilmBlocks/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
