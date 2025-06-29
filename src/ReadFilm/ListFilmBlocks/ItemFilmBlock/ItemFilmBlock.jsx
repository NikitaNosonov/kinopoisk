import React from 'react';
import './ItemFilmBlock.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {IconButton, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import {Link} from 'react-router-dom';
import {useQueryClient} from "@tanstack/react-query";

const ItemFilmBlock = (props) => {
    const queryClient = useQueryClient();

    const fetchTask = () => {
        queryClient.invalidateQueries(['films']);
    }

    const remove = async (id, event) => {
        event.preventDefault();
        debugger;
        fetch(`/api/films/${id}`, {method: 'DELETE'}).then(fetchTask);
    }


    return (
        <div className="ItemFilmBlock">
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
                                <TableCell className="btns">
                                    <IconButton className="btn1">
                                        <EditIcon onClick={(e) => props.edit(props.films, e)}/>
                                    </IconButton>
                                    <IconButton className="btn1">
                                        <DeleteIcon fontSize="small"
                                                    onClick={(e) => remove(props.films.id, e)}/>
                                    </IconButton>
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