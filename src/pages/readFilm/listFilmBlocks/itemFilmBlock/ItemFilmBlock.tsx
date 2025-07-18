import React from 'react';
import './ItemFilmBlock.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {IconButton, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import {Link} from 'react-router-dom';
import {Film, UserData} from "../../../../types/typesData";
import fetchFilm from "../../../../services/filmService";
import {observer} from "mobx-react-lite";

interface ItemFilmBlockProps {
    films: Film,
    edit: (film: Film, event: React.MouseEvent) => void,
    count: number,
    userData?: UserData | null;
}

const ItemFilmBlock: React.FC<ItemFilmBlockProps> = observer(({films, edit, count, userData}) => {

    const remove = (id: number | null, event: React.MouseEvent) => {
        event.preventDefault();
        fetchFilm.deleteFilm(id);
    }

    return (
        <div className="ItemFilmBlock">
            <Link to={`film/${films.id}`}
                  state={{
                      id: films.id,
                  }}>
                <TableContainer >
                    <hr style={{color: 'white', width: '98%'}}></hr>
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
                                <TableCell className="btns">
                                    {(userData?.email === 'admin') ?
                                        <IconButton className="btn1"
                                                    onClick={(e) => edit(films, e)}>
                                            <EditIcon/>
                                        </IconButton> : null}
                                    {(userData?.email === 'admin') ?
                                        <IconButton className="btn1"
                                                    onClick={(e) => remove(films.id, e)}>
                                        <DeleteIcon fontSize="small"/>
                                    </IconButton> : null}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Link>
        </div>
    );
});

export default ItemFilmBlock;