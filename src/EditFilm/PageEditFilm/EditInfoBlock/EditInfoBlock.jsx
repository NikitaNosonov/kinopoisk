import React from 'react';
import './EditInfoBlock.css'
import {TextField} from "@mui/material";

const EditInfoBlock = (props) => {
    return (
        <div className="editInfoBlock">
            <div className="info">
                <TextField
                    name={props.film.details?.title}
                    value={props.film.details?.title || ''}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            title: e.target.value
                        }
                    }))}
                    type="text"
                    size="small"
                    placeholder="Название"/>
            </div>
            {(!props.film.details?.title) ? props.error && <div className="alertDanger"><i>{props.error}</i></div> : <p></p>}
            <TextField
                name={props.film.details?.fullDescription}
                value={props.film.details?.fullDescription || ''}
                onChange={(e => props.setFilm({
                    ...props.film, details: {
                        ...props.film.details,
                        fullDescription: e.target.value
                    }
                }))}
                type="text"
                size="small"
                placeholder="Описание"/>
            {(!props.film.details?.fullDescription) ? props.error && <div className="alertDanger"><i>{props.error}</i></div> : <p></p>}
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
                    value={props.film.details?.aboutFilmEntity?.yearProd}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                yearProd: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "45px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Страна</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.country}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                country: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "115px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Жанр</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.genre}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                genre: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "125px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3 style={{paddingBottom: "10px"}}>Слоган</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.slogan}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                slogan: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "115px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Режиссер</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.director}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                yearProd: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "97px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Сценарий</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.script}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                script: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "99px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Продюсер</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.producer}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                producer: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "95px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Оператор</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.operator}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                operator: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "100px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Композитор</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.composer}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                composer: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "85px", marginTop: "-10px"}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Художник</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.artist}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                artist: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "100px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Монтаж</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.montage}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                montage: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "112px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Бюджет</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.budget}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                budget: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "112px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Сборы в США</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.feesInTheUSA}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                feesInTheUSA: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "74px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Сборы в мире</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.feesInTheWorld}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                feesInTheWorld: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "75px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Сборы в России</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.feesInTheRussian}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                feesInTheRussian: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "62px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Премьера в России</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.premiereInRussia}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                premiereInRussia: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "42px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Премьера в мире</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.premiereInWorld}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                premiereInWorld: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "57px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3 style={{paddingBottom: "10px"}}>Релиз на DVD</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.releaseOnDVD}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                releaseOnDVD: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "78px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3 style={{paddingBottom: "10px"}}>Релиз на Blu-ray</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.releaseOnBluRay}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                releaseOnBluRay: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "55px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Возраст</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.age}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                age: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "115px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Рейтинг MPAA</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.ratingMPAA}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                ratingMPAA: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "75px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Время</h3>
                <TextField
                    value={props.film.details?.aboutFilmEntity?.time}
                    onChange={(e => props.setFilm({
                        ...props.film, details: {
                            ...props.film.details,
                            aboutFilmEntity: {
                                ...props.film.details.aboutFilmEntity,
                                time: e.target.value
                            }
                        }
                    }))}
                    type="text"
                    style={{paddingLeft: "128px", marginTop: '-10px'}}
                    size="small"/>
            </div>
        </div>
    );
};

export default EditInfoBlock;