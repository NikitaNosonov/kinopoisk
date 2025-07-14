import React from 'react';
import {TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import {Film, token} from "../../shared/typesData";
import "./ResSearchNavBar.css"
import {jwtDecode} from "jwt-decode";

interface resSearchNavBarProps {
    films?: Film[];
}

const ResSearchNavBar: React.FC<resSearchNavBarProps> = ({films}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();

    const navigation = (id: number) => {
        if (token) {
            const tokenDec = jwtDecode<token>(token);
            if (tokenDec.role === "admin") {
                navigate(`/admin/listFilms/film/${id}`);
            } else if (tokenDec.role === "user") {
                navigate(`/listFilms/film/${id}`);
            }
        }
    }

    return (
        <div className="resSearchNavBar">
            {films?.map((film) => (
            <TableContainer className="item">
                <TableBody>
                        <TableRow onClick={() => film.id ? navigation(film.id) : null}>
                            <TableCell className="poster"><img src={film.poster} alt=""/></TableCell>
                            <TableCell className="content">
                                <h1>{film.firstName}</h1>
                                <h2>{film.secondName}</h2>
                            </TableCell>
                        </TableRow>
                </TableBody>
            </TableContainer>))}
        </div>
    );
};

export default ResSearchNavBar;