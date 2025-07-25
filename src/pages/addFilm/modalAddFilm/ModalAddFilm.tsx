import React from 'react';
import './ModalAddFilm.css'
import {Button, TextField} from '@mui/material';
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import fetchFilm from "../../../services/fetchFilmService";
import route from "../../../services/routeService";

interface ModalAddFilmProps {
    index?: () => number
}

const ModalAddFilm: React.FC<ModalAddFilmProps> = observer(({index}) => {
    const [film, setFilm] = React.useState(
        {poster: '', firstName: '', secondName: '', description: '', grade: ''});
    const [error, setError] = React.useState('');
    const navigate = useNavigate();
    const indexFilm = index ? index() + 1 : null;

    const addNewFilm = (e: React.MouseEvent) => {
        e.preventDefault()
        if (!film.firstName || !film.secondName || !film.description || !film.grade) {
            setError('**Поле обязательно для заполнения**');
        } else {
            fetchFilm.addFilm({
                id: indexFilm,
                poster: film.poster,
                firstName: film.firstName,
                secondName: film.secondName,
                description: film.description,
                grade: film.grade,
                details: {}
            });

            setFilm({poster: '', firstName: '', secondName: '', description: '', grade: ''})
            navigate(route.addFilmRoute(indexFilm))
        }
    }

    return (
        <div className="ModalAddFilm">
            <TextField
                className="input"
                value={film?.firstName}
                onChange={e => setFilm({...film, firstName: e.target.value})}
                type="text"
                placeholder="Заголовок"/>
            {(!film.firstName) ? error && <div className="alertDanger"><i>{error}</i></div> : <p></p>}
            <TextField
                className="input"
                value={film.secondName}
                onChange={e => setFilm({...film, secondName: e.target.value})}
                type="text"
                placeholder="Полное название"/>
            {(!film.secondName) ? error && <div className="alertDanger"><i>{error}</i></div> : <p></p>}
            <TextField
                className="input"
                value={film.description}
                onChange={e => setFilm({...film, description: e.target.value})}
                type="text"
                placeholder="Краткое описание"/>
            {(!film.description) ? error && <div className="alertDanger"><i>{error}</i></div> : <p></p>}
            <TextField
                className="input"
                value={film.grade}
                onChange={e => setFilm({...film, grade: e.target.value})}
                type="text"
                placeholder="Оценка"/>
            {(!film.grade) ? error && <div className="alertDanger"><i>{error}</i></div> : <p></p>}
            <Button variant="contained" color="primary" type="submit" onClick={addNewFilm}>Далее</Button>
        </div>
    );
});

export default ModalAddFilm;