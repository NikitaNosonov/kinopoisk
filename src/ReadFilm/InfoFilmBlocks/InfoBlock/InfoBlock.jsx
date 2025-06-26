import React from 'react';
import './InfoBlock.css'
import EditIcon from "@mui/icons-material/Edit";
import {IconButton} from "@mui/material";


const InfoBlock = (props) => {

    return (
        <div className="info-block">
            <h1>{props.infoFilm.details.title}</h1>
            <p>{props.infoFilm.details.description}</p>
            <div className="btns">
                <button className="btn" style={{width: "150px"}}>Буду смотреть</button>
                <button className="btn1">...</button>
            </div>
            <div className="info">
                <h2>О фильме</h2>
            </div>
            <div className="info">
                <h3>Год производства</h3>
                <p style={{paddingLeft: "45px"}}>
                    {props.infoFilm.details.aboutFilmEntity.yearProd}
                </p>
            </div>
            <div className="info">
                <h3>Страна</h3>
                <p style={{paddingLeft: "115px"}}>
                    {props.infoFilm.details.aboutFilmEntity.country}
                </p>
            </div>
            <div className="info">
                <h3>Жанр</h3>
                <p style={{paddingLeft: "125px"}}>
                    {props.infoFilm.details.aboutFilmEntity.genre}
                </p>
            </div>
            <div className="info">
                <h3 style={{paddingBottom: "10px"}}>Слоган</h3>
                <h3 style={{paddingLeft: "115px"}}>
                    {props.infoFilm.details.aboutFilmEntity.slogan}
                </h3>
            </div>
            <div className="info">
                <h3>Режиссер</h3>
                <p style={{paddingLeft: "100px"}}>
                    {props.infoFilm.details.aboutFilmEntity.director}
                </p>
            </div>
            <div className="info">
                <h3>Сценарий</h3>
                <p style={{paddingLeft: "100px"}}>
                    {props.infoFilm.details.aboutFilmEntity.script}
                </p>
            </div>
            <div className="info">
                <h3>Продюсер</h3>
                <p style={{paddingLeft: "95px"}}>
                    {props.infoFilm.details.aboutFilmEntity.producer}
                </p>
            </div>
            <div className="info">
                <h3>Оператор</h3>
                <p style={{paddingLeft: "100px"}}>
                    {props.infoFilm.details.aboutFilmEntity.operator}
                </p>
            </div>
            <div className="info">
                <h3>Композитор</h3>
                <p style={{paddingLeft: "85px"}}>
                    {props.infoFilm.details.aboutFilmEntity.composer}
                </p>
            </div>
            <div className="info">
                <h3>Художник</h3>
                <p style={{paddingLeft: "100px"}}>
                    {props.infoFilm.details.aboutFilmEntity.artist}
                </p>
            </div>
            <div className="info">
                <h3>Монтаж</h3>
                <p style={{paddingLeft: "112px"}}>
                    {props.infoFilm.details.aboutFilmEntity.montage}
                </p>
            </div>
            <div className="info">
                <h3>Бюджет</h3>
                <p style={{paddingLeft: "112px"}}>
                    {props.infoFilm.details.aboutFilmEntity.budget}
                </p>
            </div>
            <div className="info">
                <h3>Сборы в США</h3>
                <p style={{paddingLeft: "74px"}}>
                    {props.infoFilm.details.aboutFilmEntity.feesInTheUSA}
                </p>
            </div>
            <div className="info">
                <h3>Сборы в мире</h3>
                <p style={{paddingLeft: "75px"}}>
                    {props.infoFilm.details.aboutFilmEntity.feesInTheWorld}
                </p>
            </div>
            <div className="info">
                <h3>Сборы в России</h3>
                <p style={{paddingLeft: "64px"}}>
                    {props.infoFilm.details.aboutFilmEntity.feesInTheRussian}
                </p>
            </div>
            <div className="info">
                <h3>Премьера в России</h3>
                <p style={{paddingLeft: "44px"}}>
                    {props.infoFilm.details.aboutFilmEntity.premiereInRussia}
                </p>
            </div>
            <div className="info">
                <h3>Премьера в мире</h3>
                <p style={{paddingLeft: "59px"}}>
                    {props.infoFilm.details.aboutFilmEntity.premiereInWorld}
                </p>
            </div>
            <div className="info">
                <h3 style={{paddingBottom: "10px"}}>Релиз на DVD</h3>
                <h3 style={{paddingLeft: "80px"}}>
                    {props.infoFilm.details.aboutFilmEntity.releaseOnDVD}
                </h3>
            </div>
            <div className="info">
                <h3 style={{paddingBottom: "10px"}}>Релиз на Blu-ray</h3>
                <h3 style={{paddingLeft: "57px"}}>
                    {props.infoFilm.details.aboutFilmEntity.releaseOnBluRay}
                </h3>
            </div>
            <div className="info">
                <h3>Возраст</h3>
                <h4 style={{paddingLeft: "117px"}}>
                    {props.infoFilm.details.aboutFilmEntity.age}
                </h4>
            </div>
            <div className="info">
                <h3>Рейтинг MPAA</h3>
                <h4 style={{paddingLeft: "77px"}}>
                    {props.infoFilm.details.aboutFilmEntity.ratingMPAA}
                </h4>
            </div>
            <div className="info">
                <h3>Время</h3>
                <h3 style={{paddingLeft: "130px"}}>
                    {props.infoFilm.details.aboutFilmEntity.time}
                </h3>
            </div>
            {/*<a href="#">*/}
            {/*    <h5>Сиквелы, приквелы и ремейки ></h5>*/}
            {/*</a>*/}
            {/*<div className="prickvels">*/}
            {/*    <div>*/}
            {/*        <a href=""><img src="/img/prickvel1.png" alt=""/>*/}
            {/*            <h4>Бэтмен: Начало</h4>*/}
            {/*            <p>2005, боевик</p>*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <a href="">*/}
            {/*            <img src="/img/prickvel2.png" alt=""/>*/}
            {/*            <h4>Бэтмен: Рыцарь Готэма</h4>*/}
            {/*            <p>2008, аниме</p>*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <a href=""><img src="/img/prickvel3.png" alt=""/>*/}
            {/*            <h4>Темный Рыцарь: Возрождение...</h4>*/}
            {/*            <p>2012, фантастика</p>*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default InfoBlock;