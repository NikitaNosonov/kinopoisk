import React, {useState} from 'react';
import './ModalAddFilm.css'
import {Button, TextField} from '@mui/material';
import {useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";

const ModalAddFilm = (props) => {
    const [film, setFilm] = useState(
        {poster: '', firstName: '', secondName: '', description: '', grade: ''});

    const [error, setError] = useState(null);

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    let index = props.index() + 1;
    let indexChild = props.indexChild() + 1;

    const fetchTask = () => {
        queryClient.invalidateQueries(['films']);
    }

    const onChange = (e) => {
        let file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = _handleReaderLoaded;
            reader.readAsBinaryString(file);
        }
    };

    const _handleReaderLoaded = (e) => {
        console.log("file uploaded 2: ", e);
        let binaryString = e.target.result;
        setFilm({...film, poster: "data:image;base64," + btoa(binaryString)});
    };

    const addNewFilm = (e) => {
        e.preventDefault()
        if (!film.firstName || !film.secondName || !film.description || !film.grade) {
            setError('**Поле обязательно для заполнения**');
        } else {
            fetch(`/api/films`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    poster: film.poster,
                    id: index,
                    infoFilmId: indexChild,
                    firstName: film.firstName,
                    secondName: film.secondName,
                    description: film.description,
                    grade: film.grade,
                })
            })
                .then(fetchTask)
            setFilm({poster: '', firstName: '', secondName: '', description: '', grade: ''})
            navigate(`addFilm/${index}`)
        }
    }

    return (
        <div className="ModalAddFilm">
            <TextField
                className="input"
                value={film.firstName}
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
            <div className='poster'>
                <i>Добавить постер: </i>
                <input
                    type="file"
                    name="image"
                    id="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={e => onChange(e)}
                />
            </div>
            {(!film.poster) ? error && <div className="alertDanger"><i>{error}</i></div> : <p></p>}
            {/*{film.poster != null && <img className='.img' src={film.poster} alt=''/>}*/}
            <Button variant="contained" color="primary" type="submit" onClick={addNewFilm}>Далее</Button>
        </div>
    );
};

export default ModalAddFilm;