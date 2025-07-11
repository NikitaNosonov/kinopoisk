import React from 'react';
import './InfoBlock.css'
import {Film} from '../../../../shared/typesData';

interface InfoBlockProps {
    infoFilm?: Film | null;
}

const InfoBlock: React.FC<InfoBlockProps> = ({infoFilm}) => {
    return (
        <div className="info-block">
            <h1>{infoFilm?.details.title}</h1>
            <p>{infoFilm?.details.fullDescription}</p>
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
                    {infoFilm?.details.aboutFilmEntity.yearProd}
                </p>
            </div>
            <div className="info">
                <h3>Страна</h3>
                <p style={{paddingLeft: "115px"}}>
                    {infoFilm?.details.aboutFilmEntity.country}
                </p>
            </div>
            <div className="info">
                <h3>Жанр</h3>
                <p style={{paddingLeft: "125px"}}>
                    {infoFilm?.details.aboutFilmEntity.genre}
                </p>
            </div>
            <div className="info">
                <h3 style={{paddingBottom: "10px"}}>Слоган</h3>
                <h3 style={{paddingLeft: "115px"}}>
                    {infoFilm?.details.aboutFilmEntity.slogan}
                </h3>
            </div>
            <div className="info">
                <h3>Режиссер</h3>
                <p style={{paddingLeft: "100px"}}>
                    {infoFilm?.details.aboutFilmEntity.director}
                </p>
            </div>
            <div className="info">
                <h3>Сценарий</h3>
                <p style={{paddingLeft: "100px"}}>
                    {infoFilm?.details.aboutFilmEntity.script}
                </p>
            </div>
            <div className="info">
                <h3>Продюсер</h3>
                <p style={{paddingLeft: "95px"}}>
                    {infoFilm?.details.aboutFilmEntity.producer}
                </p>
            </div>
            <div className="info">
                <h3>Оператор</h3>
                <p style={{paddingLeft: "100px"}}>
                    {infoFilm?.details.aboutFilmEntity.operator}
                </p>
            </div>
            <div className="info">
                <h3>Композитор</h3>
                <p style={{paddingLeft: "85px"}}>
                    {infoFilm?.details.aboutFilmEntity.composer}
                </p>
            </div>
            <div className="info">
                <h3>Художник</h3>
                <p style={{paddingLeft: "100px"}}>
                    {infoFilm?.details.aboutFilmEntity.artist}
                </p>
            </div>
            <div className="info">
                <h3>Монтаж</h3>
                <p style={{paddingLeft: "112px"}}>
                    {infoFilm?.details.aboutFilmEntity.montage}
                </p>
            </div>
            <div className="info">
                <h3>Бюджет</h3>
                <p style={{paddingLeft: "112px"}}>
                    {infoFilm?.details.aboutFilmEntity.budget}
                </p>
            </div>
            <div className="info">
                <h3>Сборы в США</h3>
                <p style={{paddingLeft: "74px"}}>
                    {infoFilm?.details.aboutFilmEntity.feesInTheUSA}
                </p>
            </div>
            <div className="info">
                <h3>Сборы в мире</h3>
                <p style={{paddingLeft: "75px"}}>
                    {infoFilm?.details.aboutFilmEntity.feesInTheWorld}
                </p>
            </div>
            <div className="info">
                <h3>Сборы в России</h3>
                <p style={{paddingLeft: "64px"}}>
                    {infoFilm?.details.aboutFilmEntity.feesInTheRussian}
                </p>
            </div>
            <div className="info">
                <h3>Премьера в России</h3>
                <p style={{paddingLeft: "44px"}}>
                    {infoFilm?.details.aboutFilmEntity.premiereInRussia}
                </p>
            </div>
            <div className="info">
                <h3>Премьера в мире</h3>
                <p style={{paddingLeft: "59px"}}>
                    {infoFilm?.details.aboutFilmEntity.premiereInWorld}
                </p>
            </div>
            <div className="info">
                <h3 style={{paddingBottom: "10px"}}>Релиз на DVD</h3>
                <h3 style={{paddingLeft: "80px"}}>
                    {infoFilm?.details.aboutFilmEntity.releaseOnDVD}
                </h3>
            </div>
            <div className="info">
                <h3 style={{paddingBottom: "10px"}}>Релиз на Blu-ray</h3>
                <h3 style={{paddingLeft: "57px"}}>
                    {infoFilm?.details.aboutFilmEntity.releaseOnBluRay}
                </h3>
            </div>
            <div className="info">
                <h3>Возраст</h3>
                <h4 style={{paddingLeft: "117px"}}>
                    {infoFilm?.details.aboutFilmEntity.age}
                </h4>
            </div>
            <div className="info">
                <h3>Рейтинг MPAA</h3>
                <h4 style={{paddingLeft: "77px"}}>
                    {infoFilm?.details.aboutFilmEntity.ratingMPAA}
                </h4>
            </div>
            <div className="info">
                <h3>Время</h3>
                <h3 style={{paddingLeft: "130px"}}>
                    {infoFilm?.details.aboutFilmEntity.time}
                </h3>
            </div>
        </div>
    );
};

export default InfoBlock;