import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import './ModalEditFilm.css'
import {useNavigate} from "react-router-dom";
import {useQueryClient} from "@tanstack/react-query";

const ModalEditFilm = (props) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    let index = props.index() + 1;

    const fetchTask = () => {
        queryClient.invalidateQueries(['films']);
    }

    const editFilm = (e) => {
        e.preventDefault()
        fetch(`api/films/${props.editedFilm.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(props.editedFilm),
        }).then(fetchTask);
        navigate(`editFilm/${props.editedFilm.id}`)
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
                <TextField
                    className="input"
                    name={props.editedFilm.secondName}
                    value={props.editedFilm.secondName || ''}
                    onChange={(e) => props.setEditedFilm({...props.editedFilm, secondName: e.target.value})}
                    type="text"
                    placeholder="Полное название"/>
                <TextField
                    className="input"
                    name={props.editedFilm.description}
                    value={props.editedFilm.description || ''}
                    onChange={(e) => props.setEditedFilm({...props.editedFilm, description: e.target.value})}
                    type="text"
                    placeholder="Краткое описание"/>
                <TextField
                    className="input"
                    name={props.editedFilm.grade}
                    value={props.editedFilm.grade || ''}
                    onChange={(e) => props.setEditedFilm({...props.editedFilm, grade: e.target.value})}
                    type="text"
                    placeholder="Оценка"/>
                <Button variant="contained" color="primary" type="submit" onClick={editFilm}>Далее</Button>
        </div>
    );
};

export default ModalEditFilm;