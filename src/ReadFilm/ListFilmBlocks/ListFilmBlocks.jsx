import React, {useState} from 'react';
import './ListFilmBlocks.css'
import ItemFilmBlock from "./ItemFilmBlock/ItemFilmBlock";
import {useQuery} from '@tanstack/react-query';
import {Button, Dialog, DialogContent, DialogTitle} from "@mui/material";
import ModalAddFilm from "../../AddFilm/ModalAddFilm/ModalAddFilm";


const ListFilmBlocks = () => {
    const [addModal, setAddModal] = useState(false);


    const openAddModal = () => {
        setAddModal(true)
    }

    const {data: films, isLoading} = useQuery({
            queryKey: ['films'],
            queryFn: () => fetch('/api/films').then(res => res.json())
        }
    );


    function idByNewFilm() {
        let col = 0;
        for (let i = 0; i < films.length; i++) {
            if (films[i].id > col) {
                col = films[i].id;
            }
        }
        return col;
    }

    return isLoading
        ? console.log('Loading...')
        : (
            <div className="ListFilmBlocks">
                <div onClick={() => setAddModal(false)}>
                    <h1>Список фильмов</h1>
                    <Dialog open={addModal}>
                        <DialogContent onClick={(e) => e.stopPropagation()}>
                            <DialogTitle style={{marginTop: -25}} align="center">Создание фильма</DialogTitle>
                            <ModalAddFilm films={films} setAddModal={setAddModal} index={idByNewFilm}/>
                        </DialogContent>
                    </Dialog>
                </div>
                {films?.map((films, index) => (
                    <ItemFilmBlock films={films} key={films.id} index={index + 1}/>
                ))}
                <Button variant="contained" color="primary" style={{marginLeft: '230px', marginTop: '30px'}}
                        onClick={openAddModal}>Добавить фильм</Button>
            </div>
        );
};

export default ListFilmBlocks;