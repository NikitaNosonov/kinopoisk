import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import './ModalEditFilm.css'
import {useNavigate} from "react-router-dom";
import {useQueryClient} from "@tanstack/react-query";

const ModalEditFilm = (props) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [error, setError] = useState('');

    const fetchTask = () => {
        queryClient.invalidateQueries(['films']);
    }

    const editFilm = (e) => {
        if (!props.editedFilm.firstName || !props.editedFilm.secondName || !props.editedFilm.description || !props.editedFilm.grade){
            setError('**Поле обязательно для заполнения**')
        } else {
            e.preventDefault()
            fetch(`api/films/${props.editedFilm.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(props.editedFilm),
            }).then(fetchTask);
            navigate(`editFilm/${props.editedFilm.id}`)
        }
    };

    return (
        <div className="ModalEditFilm">
                <TextField
                    className="input"
                    name={props.editedFilm.firstName}
                    value={props.editedFilm.firstName || ''}
                    onChange={(e) => props.setEditedFilm({...props.editedFilm, firstName: e.target.value})}
                    type="text"
                    placeholder="Заголовок"/>
            {(!props.editedFilm.firstName) ? error && <div className="alertDanger"><i>{error}</i></div> : <p></p>}
            <TextField
                    className="input"
                    name={props.editedFilm.secondName}
                    value={props.editedFilm.secondName || ''}
                    onChange={(e) => props.setEditedFilm({...props.editedFilm, secondName: e.target.value})}
                    type="text"
                    placeholder="Полное название"/>
            {(!props.editedFilm.secondName) ? error && <div className="alertDanger"><i>{error}</i></div> : <p></p>}
            <TextField
                    className="input"
                    name={props.editedFilm.description}
                    value={props.editedFilm.description || ''}
                    onChange={(e) => props.setEditedFilm({...props.editedFilm, description: e.target.value})}
                    type="text"
                    placeholder="Краткое описание"/>
            {(!props.editedFilm.description) ? error && <div className="alertDanger"><i>{error}</i></div> : <p></p>}
            <TextField
                    className="input"
                    name={props.editedFilm.grade}
                    value={props.editedFilm.grade || ''}
                    onChange={(e) => props.setEditedFilm({...props.editedFilm, grade: e.target.value})}
                    type="text"
                    placeholder="Оценка"/>
            {(!props.editedFilm.grade) ? error && <div className="alertDanger"><i>{error}</i></div> : <p></p>}
            <Button variant="contained" color="primary" type="submit" onClick={editFilm}>Далее</Button>
        </div>
    );
};

export default ModalEditFilm;