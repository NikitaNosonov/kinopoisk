import React from 'react';
import {TextField} from "@mui/material";
import './EditActorsBlock.css';
import {Film} from "../../../../types/typesData";

interface EditActorsBlockProps {
    film?: Film | null,
    setFilm?: (value: (((prevState: (Film | null)) => (Film | null)) | Film | null)) => void
}

const EditActorsBlock: React.FC<EditActorsBlockProps> = ({film, setFilm}) => {
    return (
        <div className="editActorsBlock">
            <TextField
                value={film?.details.grades}
                onChange={(e) => {
                    if (setFilm && film) {
                        setFilm({
                            ...film, details: {
                                ...film.details,
                                grades: e.target.value
                            }
                        })
                    }
                }} size="small"
                placeholder="Количество оценок"/>
            <button className="btn" style={{width: "200px"}}>Оценить фильм</button>
            <div className="actors">
                <TextField
                    value={film?.details.review}
                    onChange={(e) => {
                        if (setFilm && film) {
                            setFilm({
                                ...film, details: {
                                    ...film.details,
                                    review: e.target.value
                                }
                            })
                        }
                    }}
                    size="small"
                    placeholder="Количество рецензий"
                    style={{marginTop: '20px', marginBottom: '80px'}}/>
                <h4>В главных ролях &gt;</h4>
                <TextField
                    value={film?.details.starring}
                    onChange={(e) => {
                        if (!film) return
                        if (setFilm && film) {
                            setFilm({
                                ...film, details: {
                                    ...film.details,
                                    starring: e.target.value.split(',')
                                }
                            })
                        }
                    }}
                    size="small"
                    placeholder="Актеры"/>
                <p style={{fontSize: '10px'}}><i>**ввод через запятую**</i></p>
                <TextField
                    value={film?.details.colStarring}
                    onChange={(e) => {
                        if (!film) return
                        if (setFilm && film) {
                            setFilm({
                                ...film, details: {
                                    ...film.details,
                                    colStarring: e.target.value
                                }
                            })
                        }
                    }}
                    size="small"
                    placeholder="Количество актеров"
                    style={{marginTop: '15px', marginBottom: '20px'}}/>
                <h4>Роли дублировали &gt;</h4>
                <TextField
                    value={film?.details.rolesDuplicated}
                    onChange={(e) => {
                        if (!film) return
                        if (setFilm && film) {
                            setFilm({
                                ...film, details: {
                                    ...film.details,
                                    rolesDuplicated: e.target.value.split(',')
                                }
                            })
                        }
                    }}
                    size="small"
                    placeholder="Актеры"/>
                <p style={{fontSize: '10px'}}><i>**ввод через запятую**</i></p>
                <TextField
                    value={film?.details.colRolesDuplicated}
                    onChange={(e) => {
                        if (!film) return
                        if (setFilm && film) {
                            setFilm({
                                ...film, details: {
                                    ...film.details,
                                    colRolesDuplicated: e.target.value
                                }
                            })
                        }
                    }}
                    size="small"
                    placeholder="Количество актеров"
                    style={{marginTop: '15px', marginBottom: '20px'}}/>
            </div>
        </div>
    );
};

export default EditActorsBlock;