import React from 'react';
import './ListFilmBlocks.css'
import ItemFilmBlock from "./itemFilmBlock/ItemFilmBlock";
import {Button, Dialog, DialogContent, DialogTitle} from "@mui/material";
import ModalAddFilm from "../../addFilm/modalAddFilm/ModalAddFilm";
import ModalEditFilm from "../../editFilm/modalEditFilm/ModalEditFilm";
import {Film} from "../../../shared/typesData";
import {observer} from "mobx-react-lite";
import filmStore from "../../../shared/filmStore";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import filmData from "../../../shared/filmStore";
import {runInAction} from "mobx";


const ListFilmBlocks: React.FC = observer(() => {
    const [addModal, setAddModal] = React.useState(false);
    const [editModal, setEditModal] = React.useState(false);
    const [editedFilm, setEditedFilm] = React.useState<Film | null>(null)


    React.useEffect(() => {
        filmStore.fetchFilm();
        const fetched = async () => {
            const res = await fetch(
                `https://246b98815ac8edb9.mokky.dev/listFilms?page=1&limit=5`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await res.json();
            runInAction(() => {
                filmStore.film = data.items
            })
        }
        fetched();
    }, [])

    let count = 0
    const numPage = () => {
        if (filmData.film.length < 5) {
            return count = 1
        } else if (filmData.film.length > 5) {
            return count = Math.ceil(filmData.film.length / 5)
        }
    }
    numPage()

    const handlePageChange = async (event: React.ChangeEvent<unknown>, page: number) => {
        const res = await fetch(
            `https://246b98815ac8edb9.mokky.dev/listFilms?page=${page}&limit=5`,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await res.json();
        filmStore.film = await data.items
    };

    const edit = (film: Film, event: React.MouseEvent) => {
        event.preventDefault();
        setEditModal(true);
        setEditedFilm({...film})
    }

    const idByNewFilm = () => {
        let col = 0;
        if (filmStore.film && Array.isArray(filmStore.film)) {
            for (const film of filmStore.film) {
                const filmId = film?.id;
                if (typeof filmId === 'number' && filmId > col) {
                    col = filmId;
                }
            }
        }
        return col;
    }

    return (
        <div className="ListFilmBlocks">
            <div onClick={() => {
                setAddModal(false);
                setEditModal(false);
            }}>
                <h1>Список фильмов</h1>
                <Dialog open={editModal}>
                    <DialogContent onClick={(e) => e.stopPropagation()}>
                        <DialogTitle style={{marginTop: -25}} align="center">Редактирование фильма</DialogTitle>
                        <ModalEditFilm
                            setEditModal={setEditModal}
                            editedFilm={editedFilm}
                            setEditedFilm={setEditedFilm}/>
                    </DialogContent>
                </Dialog>
                <Dialog open={addModal}>
                    <DialogContent onClick={(e) => e.stopPropagation()}>
                        <DialogTitle style={{marginTop: -25}} align="center">Создание фильма</DialogTitle>
                        <ModalAddFilm
                            index={idByNewFilm}/>
                    </DialogContent>
                </Dialog>
            </div>
            {filmStore.film?.map((films: Film) => (
                <ItemFilmBlock films={films} key={films.id} edit={edit}/>
            ))}
            <Stack spacing={2}>
                <Pagination count={count}
                            shape="rounded"
                            onChange={handlePageChange}
                            className="pagination"/>
            </Stack>
            <Button variant="contained" color="primary" style={{marginLeft: '230px', marginTop: '30px'}}
                    onClick={() => setAddModal(true)}>Добавить фильм</Button>
        </div>
    );
});

export default ListFilmBlocks;