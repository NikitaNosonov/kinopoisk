import React from 'react';
import './ListFilmBlocks.css'
import ItemFilmBlock from "./ItemFilmBlock/ItemFilmBlock";
import {useQuery} from '@tanstack/react-query';
import {Button, Dialog, DialogContent, DialogTitle} from "@mui/material";
import ModalAddFilm from "../../AddFilm/ModalAddFilm/ModalAddFilm";
import ModalEditFilm from "../../EditFilm/ModalEditFilm/ModalEditFilm";
import {Film} from "../../../shared/typesData";


const ListFilmBlocks: React.FC = () => {
    const [addModal, setAddModal] = React.useState<boolean>(false);
    const [editModal, setEditModal] = React.useState<boolean>(false);
    const [editedFilm, setEditedFilm] = React.useState<Film | null>(null)
    const [editFilmById, setEditFilmById] = React.useState<number | null>(null)


    const openAddModal = () => {
        setAddModal(true)
    }

    const {data: films} = useQuery<Film[]>({
            queryKey: ['films'],
            queryFn: () => fetch('https://246b98815ac8edb9.mokky.dev/listFilms', {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => res.json())
        }
    );

    console.log(films);

    const edit = (film: Film, event: React.MouseEvent) => {
        event.preventDefault();
        setEditModal(true);
        setEditFilmById(film.id);
        setEditedFilm({...film})
    }

    const idByNewFilm = () => {
        let col = 0;
        if (films && Array.isArray(films)) {
            for (const film of films) {
                const filmId = film?.id;
                if (typeof filmId === 'number' && filmId > col) {
                    col = filmId;
                }
            }
        }
        return col;
    }

    function closeModal() {
        setAddModal(false);
        setEditModal(false);

    }

    return (
        <div className="ListFilmBlocks">
            <div onClick={() => closeModal()}>
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
            {films?.map((films: Film) => (
                <ItemFilmBlock films={films} key={films.id} edit={edit}/>
            ))}
            <Button variant="contained" color="primary" style={{marginLeft: '230px', marginTop: '30px'}}
                    onClick={openAddModal}>Добавить фильм</Button>
        </div>
    );
};

export default ListFilmBlocks;