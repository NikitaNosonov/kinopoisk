import React from 'react';
import './ItemFilmBlock.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {IconButton, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import {Link} from 'react-router-dom';
import {useQueryClient} from "@tanstack/react-query";
import {Film} from "../../../../shared/typesData";

interface ItemFilmBlockProps {
    films: Film;
    edit: (film: Film, event: React.MouseEvent) => void;
}

const ItemFilmBlock: React.FC<ItemFilmBlockProps> = ({films, edit}) => {
    const queryClient = useQueryClient();

    const fetchTask = () => {
        queryClient.invalidateQueries({queryKey: ['films']});
    }

    const remove = async (id: number | null, event: React.MouseEvent) => {
        event.preventDefault();
        fetch(`https://246b98815ac8edb9.mokky.dev/listFilms/${id}`,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                method: 'DELETE'
            }).then(fetchTask);
    }


    return (
        <div className="ItemFilmBlock">
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
                                <TableCell className="btns">
                                    <IconButton className="btn1">
                                        <EditIcon onClick={(e) => edit(films, e)}/>
                                    </IconButton>
                                    <IconButton className="btn1">
                                        <DeleteIcon fontSize="small"
                                                    onClick={(e) => remove(films.id, e)}/>
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