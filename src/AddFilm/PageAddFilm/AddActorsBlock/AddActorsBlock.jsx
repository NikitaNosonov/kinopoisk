import React from 'react';
import {Button, TextField} from "@mui/material";
import './AddActorsBlock.css'

const AddActorsBlock = (props) => {
    return (
        <div className="addActorsBlock">
        <TextField
            value={props.film.grades}
            onChange={(e => props.setFilm({...props.film, grades: e.target.value}))}
            size="small"
            placeholder="Количество оценок"/>
        <button className="btn" style={{width: "200px"}}>Оценить фильм</button>
        <div className="actors">
            <TextField
                value={props.film.review}
                onChange={(e => props.setFilm({...props.film, review: e.target.value}))}
                size="small"
                placeholder="Количество рецензий"
                style={{marginTop: '20px', marginBottom: '80px'}}/>
            <h4>В главных ролях ></h4>
            <TextField
                value={props.film.starring}
                onChange={(e) => props.setFilm({...props.film, starring: e.target.value})}
                size="small"
                placeholder="Актеры"/>
            <p style={{fontSize: '10px'}}><i>**ввод через запятую**</i></p>
            <TextField
                value={props.film.colStarring}
                onChange={(e) => props.setFilm({...props.film, colStarring: e.target.value})}
                size="small"
                placeholder="Количество актеров"
                style={{marginTop: '15px', marginBottom: '20px'}}/>
            <h4>Роли дублировали ></h4>
            <TextField
                value={props.film.rolesDuplicated}
                onChange={(e) => props.setFilm({...props.film, rolesDuplicated: e.target.value})}
                size="small"
                placeholder="Актеры"/>
            <p style={{fontSize: '10px'}}><i>**ввод через запятую**</i></p>
            <TextField
                value={props.film.colRolesDuplicated}
                onChange={(e) => props.setFilm({...props.film, colRolesDuplicated: e.target.value})}
                size="small"
                placeholder="Количество актеров"
                style={{marginTop: '15px', marginBottom: '20px'}}/>
        </div>
    </div>);
};

export default AddActorsBlock;