import React, {useState} from 'react';
import './PageAddFilm.css'
import AddPhotoBlock from "./AddPhotoBlock/AddPhotoBlock";
import AddInfoBlock from "./AddInfoBlock/AddInfoBlock";
import AddActorsBlock from "./AddActorsBlock/AddActorsBlock";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {Button} from "@mui/material";

const PageAddFilm = () => {
    const {id} = useParams();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {data: infoFilm, isLoading} = useQuery({
            queryKey: ['infoFilm', id],
            queryFn: () => fetch(`/api/films/${id}/infoFilm`).then(res => res.json())
        }
    );

    const fetchTask = () => {
        queryClient.invalidateQueries(['films']);
    }
    const [film, setFilm] = useState(
        {
            title: '', fullDescription: '', grades: '', review: '', starring: '', colStarring: '',
            rolesDuplicated: '', colRolesDuplicated: '',  aboutFilmEntity:
                {
                    yearProd: '',
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
        });

    const starring = film.starring.split(',');
    const duplicated = film.rolesDuplicated.split(',');
    const [error, setError] = useState('')

    function addNewFilmInfo() {
        if (!film.title || !film.fullDescription) {
            setError('**Поле обязательно для заполнения**')
        } else {
            fetch(`/api/films/${id}/infoFilm`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: infoFilm.infoFilmId,
                    listFilmsEntityId: infoFilm.id,
                    title: film.title,
                    fullDescription: film.fullDescription,
                    grades: film.grades ? film.grades + ' оценок' : '— оценок',
                    review: film.review ? film.review + ' рецензий' : '— рецензий',
                    starring: starring ? starring : '—',
                    colStarring: film.colStarring ? film.colStarring + ' актера' : '—',
                    rolesDuplicated: duplicated ? duplicated : '—',
                    colRolesDuplicated: film.colRolesDuplicated ? film.colRolesDuplicated + ' актера' : '—',
                    aboutFilmEntity: {
                        yearProd: film.aboutFilmEntity.yearProd ? film.aboutFilmEntity.yearProd : '—',
                        country: film.aboutFilmEntity.country ? film.aboutFilmEntity.country : '—',
                        genre: film.aboutFilmEntity.genre ? film.aboutFilmEntity.genre : '—',
                        slogan: film.aboutFilmEntity.slogan ? film.aboutFilmEntity.slogan : '—',
                        director: film.aboutFilmEntity.director ? film.aboutFilmEntity.director : '—',
                        script: film.aboutFilmEntity.script ? film.aboutFilmEntity.script : '—',
                        producer: film.aboutFilmEntity.producer ? film.aboutFilmEntity.producer : '—',
                        operator: film.aboutFilmEntity.operator ? film.aboutFilmEntity.operator : '—',
                        composer: film.aboutFilmEntity.composer ? film.aboutFilmEntity.composer : '—',
                        artist: film.aboutFilmEntity.artist ? film.aboutFilmEntity.artist : '—',
                        montage: film.aboutFilmEntity.montage ? film.aboutFilmEntity.montage : '—',
                        budget: film.aboutFilmEntity.budget ? film.aboutFilmEntity.budget : '—',
                        feesInTheUSA: film.aboutFilmEntity.feesInTheUSA ? film.aboutFilmEntity.feesInTheUSA : '—',
                        feesInTheWorld: film.aboutFilmEntity.feesInTheWorld ? film.aboutFilmEntity.feesInTheWorld : '—',
                        feesInTheRussian: film.aboutFilmEntity.feesInTheRussian ? film.aboutFilmEntity.feesInTheRussian : '—',
                        premiereInRussia: film.aboutFilmEntity.premiereInRussia ? film.aboutFilmEntity.premiereInRussia : '—',
                        premiereInWorld: film.aboutFilmEntity.premiereInWorld ? film.aboutFilmEntity.premiereInWorld : '—',
                        releaseOnDVD: film.aboutFilmEntity.releaseOnDVD ? film.aboutFilmEntity.releaseOnDVD : '—',
                        releaseOnBluRay: film.aboutFilmEntity.releaseOnBluRay ? film.aboutFilmEntity.releaseOnBluRay : '—',
                        age: film.aboutFilmEntity.age ? film.aboutFilmEntity.age : '—',
                        ratingMPAA: film.aboutFilmEntity.ratingMPAA ? film.aboutFilmEntity.ratingMPAA : '—',
                        time: film.aboutFilmEntity.time ? film.aboutFilmEntity.time : '—',
                    }

                })
            })
                .then(fetchTask)
            setFilm({
                title: '', fullDescription: '', grades: '', review: '', starring: '', colStarring: '',
                rolesDuplicated: '', colRolesDuplicated: '', aboutFilmEntity:
                    {
                        yearProd: '',
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
            })
            navigate('/listFilms');
        }
    }


    return isLoading ?
        console.log('Loading...')
        : (
            <div className="pageAddFilm">
                <div className="flexPage">
                <AddPhotoBlock film={film} setFilm={setFilm} infoFilm={infoFilm} />
                <AddInfoBlock error={error} film={film} setFilm={setFilm}/>
                <AddActorsBlock error={error} film={film} setFilm={setFilm}/>
                </div>
                <Button className="blockPage" variant="contained" color="success" type="submit"
                        onClick={addNewFilmInfo}>Добавить фильм</Button>
            </div>
        );
};

export default PageAddFilm;