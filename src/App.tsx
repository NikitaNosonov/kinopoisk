import './App.css';
import  * as React  from 'react';
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

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />

                <Route path="/login" element={<Login />} />
                <Route path="/login/register" element={<Register />} />

                <Route element={<NavbarLayout />}>
                    <Route path="/admin/listFilms" element={<ListFilmBlocks />} />
                    <Route path="/admin/listFilms/film/:id" element={<InfoFilmBlocks />} />
                    <Route path="/admin/listFilms/addFilm/:id" element={<PageAddFilm />} />
                    <Route path="/admin/listFilms/editFilm/:id" element={<PageEditFilm />} />

                    <Route path="/listFilms" element={<ListFilmBlocksUser />} />
                    <Route path="/listFilms/film/:id" element={<InfoFilmBlocks />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
