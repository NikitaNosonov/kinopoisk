import React from 'react';
import './ItemFilmBlocksUser.css'
import { Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import {Link} from 'react-router-dom';
import {Film} from "../../../../shared/typesData";

interface ItemFilmBlockProps {
    films: Film;
}

const ItemFilmBlock: React.FC<ItemFilmBlockProps> = ({films}) => {
    return (
        <div className="ItemFilmBlocksUser">
            <Link to={`film/${films.id}`}
                  state={{
                      id: films.id,
                  }}>
                <TableContainer>
                    <hr style={{color: 'white', width: '400'}}></hr>
                    <Table className="myTable" size="small" aria-label="a dense table">
                        <TableBody>
                            <TableRow>
                                <TableCell className="id">
                                    <h1>{films.id}</h1>
                                </TableCell>
                                <TableCell className="poster">
                                    <img src={films.poster} alt=""/>
                                </TableCell>
                                <TableCell className="content">
                                    <h1>{films.firstName}</h1>
                                    <h2>{films.secondName}</h2>
                                    <p>{films.description}</p>
                                </TableCell>
                                <TableCell className="grade">
                                    <p>{films.grade}</p>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Link>
        </div>
    );
};

export default ItemFilmBlock;