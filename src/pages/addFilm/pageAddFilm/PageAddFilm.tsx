import React from 'react';
import './PageAddFilm.css'
import AddPhotoBlock from "./addPhotoBlock/AddPhotoBlock";
import AddInfoBlock from "./addInfoBlock/AddInfoBlock";
import AddActorsBlock from "./addActorsBlock/AddActorsBlock";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "@mui/material";
import {Film} from "../../../types/typesData";
import filmStore from "../../../store/filmStore";
import {observer} from "mobx-react-lite";

const PageAddFilm: React.FC = observer(() => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [film, setFilm] = React.useState<Film>(
        {
            poster: '',
            id: null,
            firstName: '',
            secondName: '',
            description: '',
            grade: '',
            details: {
                title: '', fullDescription: '', grades: '', review: '', starring: [], colStarring: '',
                rolesDuplicated: [], colRolesDuplicated: '', aboutFilmEntity:
                    {
                        yearProd: null,
                        country: '',
                        genre: '',
                        slogan: '',
                        director: '',
                        script: '',
                        producer: '',
                        operator: '',
                        composer: '',
                        artist: '',
                        montage: '',
                        budget: '',
                        feesInTheUSA: '',
                        feesInTheWorld: '',
                        feesInTheRussian: '',
                        premiereInRussia: '',
                        premiereInWorld: '',
                        releaseOnDVD: '',
                        releaseOnBluRay: '',
                        age: '',
                        ratingMPAA: '',
                        time: ''
                    }
            }
        });

    const [error, setError] = React.useState('')

    const addNewFilmInfo = () => {
        if (!film.details.title || !film.details.fullDescription) {
            setError('**Поле обязательно для заполнения**')
        } else {
            fetch(`https://246b98815ac8edb9.mokky.dev/listFilms/${id}`, {
                method: 'PATCH',
                headers: {
                    "Authorization": `Bearer ${filmStore.getCookie('token')}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    poster: film.poster || '/img/nonPoster.jpeg',
                    details: {
                        title: film.details.title,
                        fullDescription: film.details.fullDescription,
                        grades: film.details.grades ? film.details.grades + ' оценок' : '— оценок',
                        review: film.details.review ? film.details.review + ' рецензий' : '— рецензий',
                        starring: film.details.starring,
                        colStarring: film.details.colStarring ? film.details.colStarring + ' актера' : '—',
                        rolesDuplicated: film.details.rolesDuplicated,
                        colRolesDuplicated: film.details.colRolesDuplicated ? film.details.colRolesDuplicated + ' актера' : '—',
                        aboutFilmEntity: {
                            yearProd: film.details.aboutFilmEntity.yearProd ?? '—',
                            country: film.details.aboutFilmEntity.country ?? '—',
                            genre: film.details.aboutFilmEntity.genre ?? '—',
                            slogan: film.details.aboutFilmEntity.slogan ?? '—',
                            director: film.details.aboutFilmEntity.director ?? '—',
                            script: film.details.aboutFilmEntity.script ?? '—',
                            producer: film.details.aboutFilmEntity.producer ?? '—',
                            operator: film.details.aboutFilmEntity.operator ?? '—',
                            composer: film.details.aboutFilmEntity.composer ?? '—',
                            artist: film.details.aboutFilmEntity.artist ?? '—',
                            montage: film.details.aboutFilmEntity.montage ?? '—',
                            budget: film.details.aboutFilmEntity.budget ?? '—',
                            feesInTheUSA: film.details.aboutFilmEntity.feesInTheUSA ?? '—',
                            feesInTheWorld: film.details.aboutFilmEntity.feesInTheWorld ?? '—',
                            feesInTheRussian: film.details.aboutFilmEntity.feesInTheRussian ?? '—',
                            premiereInRussia: film.details.aboutFilmEntity.premiereInRussia ?? '—',
                            premiereInWorld: film.details.aboutFilmEntity.premiereInWorld ?? '—',
                            releaseOnDVD: film.details.aboutFilmEntity.releaseOnDVD ?? '—',
                            releaseOnBluRay: film.details.aboutFilmEntity.releaseOnBluRay ?? '—',
                            age: film.details.aboutFilmEntity.age ?? '—',
                            ratingMPAA: film.details.aboutFilmEntity.ratingMPAA ?? '—',
                            time: film.details.aboutFilmEntity.time ?? '—',
                        }
                    }
                })
            })
            filmStore.fetchStart(1)
            setFilm({
                poster: '',
                id: null,
                firstName: '',
                secondName: '',
                description: '',
                grade: '',
                details: {
                    title: '', fullDescription: '', grades: '', review: '', starring: [], colStarring: '',
                    rolesDuplicated: [], colRolesDuplicated: '', aboutFilmEntity:
                        {
                            yearProd: null,
                            country: '',
                            genre: '',
                            slogan: '',
                            director: '',
                            script: '',
                            producer: '',
                            operator: '',
                            composer: '',
                            artist: '',
                            montage: '',
                            budget: '',
                            feesInTheUSA: '',
                            feesInTheWorld: '',
                            feesInTheRussian: '',
                            premiereInRussia: '',
                            premiereInWorld: '',
                            releaseOnDVD: '',
                            releaseOnBluRay: '',
                            age: '',
                            ratingMPAA: '',
                            time: ''
                        }
                }
            })
            navigate('/listFilms');
        }
    }

    return (
        <div className="pageAddFilm">
            <div className="flexPage">
                <AddPhotoBlock error={error} film={film} setFilm={setFilm} />
                <AddInfoBlock error={error} film={film} setFilm={setFilm}/>
                <AddActorsBlock film={film} setFilm={setFilm}/>
            </div>
            <Button className="blockPage" variant="contained" color="success" type="submit"
                    onClick={addNewFilmInfo}>Добавить фильм</Button>
        </div>
    );
});

export default PageAddFilm;