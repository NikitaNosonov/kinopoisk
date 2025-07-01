import React, {useState} from 'react';
import './ListFilmBlocks.css'
import ItemFilmBlock from "./ItemFilmBlock/ItemFilmBlock";
import {useQuery} from '@tanstack/react-query';
import {Button, Dialog, DialogContent, DialogTitle} from "@mui/material";
import ModalAddFilm from "../../AddFilm/ModalAddFilm/ModalAddFilm";
import ModalEditFilm from "../../EditFilm/ModalEditFilm/ModalEditFilm";


const ListFilmBlocks = () => {
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [editedFilm, setEditedFilm] = useState({})
    const [editFilmById, setEditFilmById] = useState(null)


    const openAddModal = () => {
        setAddModal(true)
    }

    const {data: films, isLoading} = useQuery({
            queryKey: ['films'],
            queryFn: () => fetch('/api/films').then(res => res.json())
        }
    );

    const edit = async (film, event) => {
        event.preventDefault();
        setEditModal(true);
        setEditFilmById(film.id);
        setEditedFilm({...film})
    }

    function idByNewFilm() {
        let col = 0;
        for (let i = 0; i < films.length; i++) {
            if (films[i].id > col) {
                col = films[i].id;
            }
        }
        return col;
    }

    function idByNewAboutFilm() {
        let col = 0;
        for (let i = 0; i < films.length; i++) {
            if (films[i].infoFilmId > col) {
                col = films[i].infoFilmId;
            }
        }
        return col;
    }

    function closeModal(){
        setAddModal(false);
        setEditModal(false);
    }

    return isLoading
        ? console.log('Loading...')
        : (
            <div className="ListFilmBlocks">
                <div onClick={() => closeModal()}>
                    <h1>Список фильмов</h1>
                    <Dialog open={editModal}>
                        <DialogContent onClick={(e) => e.stopPropagation()}>
                            <DialogTitle style={{marginTop: -25}} align="center">Редактирование фильма</DialogTitle>
                            <ModalEditFilm
                                films={films}
                                setEditModal={setEditModal}
                                editedFilm={editedFilm}
                                setEditedFilm={setEditedFilm}
                                index={idByNewFilm}/>
                        </DialogContent>
                    </Dialog>
                    <Dialog open={addModal}>
                        <DialogContent onClick={(e) => e.stopPropagation()}>
                            <DialogTitle style={{marginTop: -25}} align="center">Создание фильма</DialogTitle>
                            <ModalAddFilm
                                films={films}
                                setAddModal={setAddModal}
                                index={idByNewFilm}
                                indexChild={idByNewAboutFilm}/>
                        </DialogContent>
                    </Dialog>
                </div>
                {films?.map((films, index) => (
                    <ItemFilmBlock films={films} key={films.id} setEditModal={setEditModal} edit={edit} index={index + 1}/>
                ))}
                <Button variant="contained" color="primary" style={{marginLeft: '230px', marginTop: '30px'}}
                        onClick={openAddModal}>Добавить фильм</Button>
            </div>
        );
};

export default ListFilmBlocks;