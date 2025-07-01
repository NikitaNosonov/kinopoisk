import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import './AddInfoBlock.css'
const AddInfoBlock = (props) => {
    return (
        <div className="addInfoBlock">
            <div className="info">
                <TextField
                    value={props.film.title}
                    onChange={(e => props.setFilm({...props.film, title: e.target.value}))}
                    type="text"
                    size="small"
                    placeholder="Название"/>
            </div>
            {(!props.film.title) ? props.error && <div className="alertDanger"><i>{props.error}</i></div> : <p></p>}
            <TextField
                value={props.film.description}
                onChange={(e => props.setFilm({...props.film, description: e.target.value}))}
                type="text"
                size="small"
                placeholder="Описание"/>
            {(!props.film.description) ? props.error && <div className="alertDanger"><i>{props.error}</i></div> : <p></p>}
            <div className="btns">
                <button className="btn" style={{width: "150px"}}>Буду смотреть</button>
                <button className="btn1">...</button>
            </div>
            <div className="info">
                <h2>О фильме</h2>
            </div>
            <div className="info">
                <h3>Год производства</h3>
                <TextField
                    value={props.film.aboutFilmEntity.yearProd}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, yearProd: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "45px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Страна</h3>
                <TextField
                    value={props.film.aboutFilmEntity.country}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, country: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "115px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Жанр</h3>
                <TextField
                    value={props.film.aboutFilmEntity.genre}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, genre: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "125px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3 style={{paddingBottom: "10px"}}>Слоган</h3>
                <TextField
                    value={props.film.aboutFilmEntity.slogan}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, slogan: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "115px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Режиссер</h3>
                <TextField
                    value={props.film.aboutFilmEntity.director}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, director: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "97px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Сценарий</h3>
                <TextField
                    value={props.film.aboutFilmEntity.script}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, script: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "99px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Продюсер</h3>
                <TextField
                    value={props.film.aboutFilmEntity.producer}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, producer: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "95px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Оператор</h3>
                <TextField
                    value={props.film.aboutFilmEntity.operator}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, operator: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "100px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Композитор</h3>
                <TextField
                    value={props.film.aboutFilmEntity.composer}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, composer: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "85px", marginTop: "-10px"}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Художник</h3>
                <TextField
                    value={props.film.aboutFilmEntity.artist}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, artist: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "100px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Монтаж</h3>
                <TextField
                    value={props.film.aboutFilmEntity.montage}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, montage: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "112px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Бюджет</h3>
                <TextField
                    value={props.film.aboutFilmEntity.budget}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, budget: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "112px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Сборы в США</h3>
                <TextField
                    value={props.film.aboutFilmEntity.feesInTheUSA}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, feesInTheUSA: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "74px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Сборы в мире</h3>
                <TextField
                    value={props.film.aboutFilmEntity.feesInTheWorld}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, feesInTheWorld: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "75px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Сборы в России</h3>
                <TextField
                    value={props.film.aboutFilmEntity.feesInTheRussian}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, feesInTheRussian: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "62px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Премьера в России</h3>
                <TextField
                    value={props.film.aboutFilmEntity.premiereInRussia}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, premiereInRussia: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "42px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Премьера в мире</h3>
                <TextField
                    value={props.film.aboutFilmEntity.premiereInWorld}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, premiereInWorld: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "57px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3 style={{paddingBottom: "10px"}}>Релиз на DVD</h3>
                <TextField
                    value={props.film.aboutFilmEntity.releaseOnDVD}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, releaseOnDVD: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "78px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3 style={{paddingBottom: "10px"}}>Релиз на Blu-ray</h3>
                <TextField
                    value={props.film.aboutFilmEntity.releaseOnBluRay}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, releaseOnBluRay: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "55px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Возраст</h3>
                <TextField
                    value={props.film.aboutFilmEntity.age}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, age: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "115px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Рейтинг MPAA</h3>
                <TextField
                    value={props.film.aboutFilmEntity.ratingMPAA}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, ratingMPAA: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "75px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Время</h3>
                <TextField
                    value={props.film.aboutFilmEntity.time}
                    onChange={(e => props.setFilm({
                        ...props.film,
                        aboutFilmEntity: {...props.film.aboutFilmEntity, time: e.target.value}
                    }))}
                    type="text"
                    style={{paddingLeft: "128px", marginTop: '-10px'}}
                    size="small"/>
            </div>
        </div>
    );
};

export default AddInfoBlock;