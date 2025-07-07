import React from 'react';
import {TextField} from "@mui/material";
import './EditActorsBlock.css';

const EditActorsBlock = (props) => {
    return (
        <div className="editActorsBlock">
            <TextField
                value={props.film.details?.grades}
                onChange={(e => props.setFilm({
                    ...props.film, details: {
                        ...props.film.details,
                        grades: e.target.value
                    }
                }))}                size="small"
                placeholder="Количество оценок"/>
            <button className="btn" style={{width: "200px"}}>Оценить фильм</button>
            <div className="actors">
                <TextField
                    value={props.film.details?.review}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            review: e.target.value
                        }
                    }))}                    size="small"
                    placeholder="Количество рецензий"
                    style={{marginTop: '20px', marginBottom: '80px'}}/>
                <h4>В главных ролях ></h4>
                <TextField
                    value={props.film.details?.starring}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            starring: e.target.value
                        }
                    }))}                    size="small"
                    placeholder="Актеры"/>
                <p style={{fontSize: '10px'}}><i>**ввод через запятую**</i></p>
                <TextField
                    value={props.film.details?.colStarring}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            colStarring: e.target.value
                        }
                    }))}                    size="small"
                    placeholder="Количество актеров"
                    style={{marginTop: '15px', marginBottom: '20px'}}/>
                <h4>Роли дублировали ></h4>
                <TextField
                    value={props.film.details?.rolesDuplicated}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            rolesDuplicated: e.target.value
                        }
                    }))}                    size="small"
                    placeholder="Актеры"/>
                <p style={{fontSize: '10px'}}><i>**ввод через запятую**</i></p>
                <TextField
                    value={props.film.details?.colRolesDuplicated}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            colRolesDuplicated: e.target.value
                        }
                    }))}                    size="small"
                    placeholder="Количество актеров"
                    style={{marginTop: '15px', marginBottom: '20px'}}/>
            </div>
        </div>
    );
};

export default EditActorsBlock;