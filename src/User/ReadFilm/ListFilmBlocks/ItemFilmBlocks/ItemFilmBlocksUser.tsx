import React from 'react';
import './ItemFilmBlocksUser.css'
import { Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import {Link} from 'react-router-dom';

const ItemFilmBlock = (props) => {
    return (
        <div className="ItemFilmBlocksUser">
            <Link to={`film/${props.films.id}`}
                  state={{
                      id: props.films.id,
                  }}>
                <TableContainer>
                    <hr style={{color: 'white', width: '400'}}></hr>
                    <Table className="myTable" size="small" aria-label="a dense table">
                        <TableBody>
                            <TableRow>
                                <TableCell className="id">
                                    <h1>{props.films.id}</h1>
                                </TableCell>
                                <TableCell className="poster">
                                    <img src={props.films.poster} alt=""/>
                                </TableCell>
                                <TableCell className="content">
                                    <h1>{props.films.firstName}</h1>
                                    <h2>{props.films.secondName}</h2>
                                    <p>{props.films.description}</p>
                                </TableCell>
                                <TableCell className="grade">
                                    <p>{props.films.grade}</p>
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