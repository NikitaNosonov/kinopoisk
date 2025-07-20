import React from 'react';
import {Button, TextField} from "@mui/material";
import './ModalEditFilm.css'
import {useNavigate} from "react-router-dom";
import {Film} from "../../../types/typesData";
import filmStore from "../../../store/filmStore";
import {observer} from "mobx-react-lite";
import route from "../../../services/routeService";

interface ModalEditFilmProps {
    setEditModal?: (value: (((prevState: boolean) => boolean) | boolean)) => void,
    editedFilm?: Film | null,
    setEditedFilm?: (value: (((prevState: (Film | null)) => (Film | null)) | Film | null)) => void
}

const ModalEditFilm: React.FC<ModalEditFilmProps> = observer(({setEditModal, setEditedFilm, editedFilm}) => {
    const navigate = useNavigate();
    const [error, setError] = React.useState('');

    const editFilm = async (e: React.MouseEvent) => {
        if (!editedFilm?.firstName || !editedFilm.secondName || !editedFilm.description || !editedFilm.grade) {
            setError('**Поле обязательно для заполнения**')
        } else {
            e.preventDefault()
            await filmStore.fetchEditFilm(editedFilm.id, editedFilm)
            await navigate(route.editFilmRoute(editedFilm.id))
        }
    };

    return (
        <div className="ModalEditFilm">
            <TextField
                className="input"
                value={editedFilm?.firstName || ''}
                onChange={(e) => {
                    if (!editedFilm) return;
                    if (setEditedFilm) {
                        setEditedFilm(
                            {...editedFilm, firstName: e.target.value})
                    }
                }}
                type="text"
                placeholder="Заголовок"/>
            {(!editedFilm?.firstName) ? error && <div className="alertDanger"><i>{error}</i></div> : <p></p>}
            <TextField
                className="input"
                value={editedFilm?.secondName || ''}
                onChange={(e) => {
                    if (!editedFilm) return;
                    if (setEditedFilm) {
                        setEditedFilm(
                            {...editedFilm, secondName: e.target.value})
                    }
                }}
                type="text"
                placeholder="Полное название"/>
            {(!editedFilm?.secondName) ? error && <div className="alertDanger"><i>{error}</i></div> : <p></p>}
            <TextField
                className="input"
                value={editedFilm?.description || ''}
                onChange={(e) => {
                    if (!editedFilm) return;
                    if (setEditedFilm) {
                        setEditedFilm(
                            {...editedFilm, description: e.target.value})
                    }
                }}
                type="text"
                placeholder="Краткое описание"/>
            {(!editedFilm?.description) ? error && <div className="alertDanger"><i>{error}</i></div> : <p></p>}
            <TextField
                className="input"
                value={editedFilm?.grade || ''}
                onChange={(e) => {
                    if (!editedFilm) return;
                    if (setEditedFilm) {
                        setEditedFilm(
                            {...editedFilm, grade: e.target.value})
                    }
                }}
                type="text"
                placeholder="Оценка"/>
            {(!editedFilm?.grade) ? error && <div className="alertDanger"><i>{error}</i></div> : <p></p>}
            <Button variant="contained" color="primary" type="submit" onClick={editFilm}>Далее</Button>
        </div>
    );
});

export default ModalEditFilm;