import React from 'react';
import {Box, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import {Film} from "../../../types/typesData";
import "./ResSearchNavBar.css"

interface resSearchNavBarProps {
    films?: Film[];
}

const ResSearchNavBar: React.FC<resSearchNavBarProps> = ({films}) => {
    const navigate = useNavigate();

    return (
        <Box className="resSearchNavBar">
            {films?.map((film) => (
            <TableContainer className="item">
                <TableBody>
                        <TableRow onClick={() => film.id ? navigate(`/listFilms/film/${film.id}`) : null}>
                            <TableCell className="poster"><img src={film.poster} alt=""/></TableCell>
                            <TableCell className="content">
                                <h1>{film.firstName}</h1>
                                <h2>{film.secondName}</h2>
                            </TableCell>
                        </TableRow>
                </TableBody>
            </TableContainer>))}
        </Box>
    );
};

export default ResSearchNavBar;