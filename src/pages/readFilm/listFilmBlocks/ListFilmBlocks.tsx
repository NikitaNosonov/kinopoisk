import React from 'react';
import './ListFilmBlocks.css'
import ItemFilmBlock from "./itemFilmBlock/ItemFilmBlock";
import {Button, Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";
import ModalAddFilm from "../../addFilm/modalAddFilm/ModalAddFilm";
import ModalEditFilm from "../../editFilm/modalEditFilm/ModalEditFilm";
import {Film, UserData} from "../../../types/typesData";
import {observer} from "mobx-react-lite";
import filmStore from "../../../store/filmStore";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ListFilmBlocks: React.FC = observer(() => {
    const userDataStr = localStorage.getItem('data');
    const userData = userDataStr ? JSON.parse(userDataStr) as UserData : null;
    const [addModal, setAddModal] = React.useState(false);
    const [editModal, setEditModal] = React.useState(false);
    const [editedFilm, setEditedFilm] = React.useState<Film | null>(null)
    let count = 1

    React.useEffect(() => {
        filmStore.fetchFilm();
        filmStore.fetchStart(1);
    }, [])

    const numPage = () => {
        filmStore.fetchFilm();
        if (filmStore.film.length < 5) {
            return count = 1
        } else if (filmStore.film.length === 5) {
            return 1
        } else if (filmStore.film.length > 5) {
            return count = Math.ceil(filmStore.film.length / 5)
        }
    }
    numPage()

    const handlePageChange = async (event: React.ChangeEvent<unknown>, page: number) => {
        filmStore.fetchStart(page);
    };

    const edit = (film: Film, event: React.MouseEvent) => {
        event.preventDefault();
        setEditModal(true);
        alert( document.cookie );
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
                <Typography className="title">Список фильмов</Typography>
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
            {filmStore.filmStart?.map((films: Film) => (
                <ItemFilmBlock films={films} key={films.id} edit={edit} count={count} userData={userData} />
            ))}
            <Stack spacing={2}>
                <Pagination count={count}
                            shape="rounded"
                            onChange={handlePageChange}
                            className="pagination"/>
            </Stack>
            {(userData?.email === 'admin') ?
                <Button className="btnAdd" variant="contained" color="primary"
                        onClick={() => setAddModal(true)}>Добавить фильм</Button> : null}
        </div>
    );
});

export default ListFilmBlocks;