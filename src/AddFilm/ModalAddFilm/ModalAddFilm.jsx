import React, {useState} from 'react';
import './ModalAddFilm.css'
import {Button, TextField} from '@mui/material';
import {useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";

const ModalAddFilm = (props) => {
    const [film, setFilm] = useState(
        {firstName: '', secondName: '', description: '', grade: '' });

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    let index = props.index() + 1;
    let indexChild = props.indexChild() + 1;

    const fetchTask = () => {
        queryClient.invalidateQueries(['films']);
    }

    const addNewFilm = (e) => {
        e.preventDefault()
        fetch(`/api/films`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: index,
                infoFilmId: indexChild,
                firstName: film.firstName,
                secondName: film.secondName,
                description: film.description,
                grade: film.grade,
            })
        })
            .then(fetchTask)
        setFilm({ firstName: '', secondName: '', description: '', grade: '' })
        navigate(`addFilm/${index}`)
    }

    return (
        <div className="ModalAddFilm">
            <TextField
                className="input"
                value={film.firstName}
                onChange={e => setFilm({...film, firstName: e.target.value})}
                type="text"
                placeholder="Заголовок"/>
            <TextField
                className="input"
                value={film.secondName}
                onChange={e => setFilm({...film, secondName: e.target.value})}
                type="text"
                placeholder="Полное название"/>
            <TextField
                className="input"
                value={film.description}
                onChange={e => setFilm({...film, description: e.target.value})}
                type="text"
                placeholder="Краткое описание"/>
            <TextField
                className="input"
                value={film.grade}
                onChange={e => setFilm({...film, grade: e.target.value})}
                type="text"
                placeholder="Оценка"/>
            <Button variant="contained" color="primary" type="submit" onClick={addNewFilm}>Далее</Button>
        </div>
    );
};

export default ModalAddFilm;