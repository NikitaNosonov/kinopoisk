import React from 'react';
import './EditInfoBlock.css'
import {TextField} from "@mui/material";
import {Film} from "../../../../shared/typesData";

interface EditInfoBlockProps {
    film?: Film;
    setFilm: (film: Film) => void;
    error?: string;
}

const EditInfoBlock: React.FC<EditInfoBlockProps> = ({film, setFilm, error}) => {
    return (
        <div className="editInfoBlock">
            <div className="info">
                <TextField
                    value={film?.details.title}
                    onChange={(e) => {
                        if (!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                title: e.target.value
                            }
                        })
                    }}
                    type="text"
                    size="small"
                    placeholder="Название"/>
            </div>
            {(!film?.details.title) ? error && <div className="alertDanger"><i>{error}</i></div> :
                <p></p>}
            <TextField
                value={film?.details.fullDescription}
                onChange={(e) => {
                    if (!film) return
                    setFilm({
                        ...film, details: {
                            ...film.details,
                            fullDescription: e.target.value
                        }
                    })
                }}
                type="text"
                size="small"
                placeholder="Описание"/>
            {(!film?.details.fullDescription) ? error &&
                <div className="alertDanger"><i>{error}</i></div> : <p></p>}
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
                    value={film?.details.aboutFilmEntity.yearProd}
                    onChange={(e) => {
                        if (!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    yearProd: Number(e.target.value)
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "45px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Страна</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.country}
                    onChange={(e) => {
                        if (!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    country: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "115px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Жанр</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.genre}
                    onChange={(e) => {
                        if (!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    genre: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "125px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3 style={{paddingBottom: "10px"}}>Слоган</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.slogan}
                    onChange={(e) => {
                        if (!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    slogan: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "115px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Режиссер</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.director}
                    onChange={(e) => {
                        if (!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    director: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "97px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Сценарий</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.script}
                    onChange={(e) => {
                        if (!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    script: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "99px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Продюсер</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.producer}
                    onChange={(e) => {
                        if (!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    producer: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "95px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Оператор</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.operator}
                    onChange={(e) => {
                        if (!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    operator: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "100px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Композитор</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.composer}
                    onChange={(e) => {
                        if (!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    composer: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "85px", marginTop: "-10px"}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Художник</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.artist}
                    onChange={(e) => {
                        if (!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    artist: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "100px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Монтаж</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.montage}
                    onChange={(e) => {
                        if (!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    montage: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "112px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Бюджет</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.budget}
                    onChange={(e) => {
                        if (!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    budget: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "112px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Сборы в США</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.feesInTheUSA}
                    onChange={(e) => {
                        if (!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    feesInTheUSA: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "74px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Сборы в мире</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.feesInTheWorld}
                    onChange={(e) => {
                        if (!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    feesInTheWorld: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "75px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Сборы в России</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.feesInTheRussian}
                    onChange={(e) => {
                        if(!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    feesInTheRussian: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "62px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Премьера в России</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.premiereInRussia}
                    onChange={(e) => {
                        if(!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    premiereInRussia: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "42px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Премьера в мире</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.premiereInWorld}
                    onChange={(e) => {
                        if(!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    premiereInWorld: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "57px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3 style={{paddingBottom: "10px"}}>Релиз на DVD</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.releaseOnDVD}
                    onChange={(e) => {
                        if(!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    releaseOnDVD: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "78px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3 style={{paddingBottom: "10px"}}>Релиз на Blu-ray</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.releaseOnBluRay}
                    onChange={(e) => {
                        if(!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    releaseOnBluRay: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "55px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Возраст</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.age}
                    onChange={(e) => {
                        if(!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    age: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "115px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Рейтинг MPAA</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.ratingMPAA}
                    onChange={(e) => {
                        if(!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    ratingMPAA: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "75px", marginTop: '-10px'}}
                    size="small"/>
            </div>
            <div className="info">
                <h3>Время</h3>
                <TextField
                    value={film?.details.aboutFilmEntity.time}
                    onChange={(e) => {
                        if(!film) return
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                aboutFilmEntity: {
                                    ...film.details.aboutFilmEntity,
                                    time: e.target.value
                                }
                            }
                        })
                    }}
                    type="text"
                    style={{paddingLeft: "128px", marginTop: '-10px'}}
                    size="small"/>
            </div>
        </div>
    );
};

export default EditInfoBlock;