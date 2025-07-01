import React, {useCallback, useEffect, useState} from 'react';
import {Button} from "@mui/material";
import EditPhotoBlock from "./EditPhotoBlock/EditPhotoBlock";
import EditInfoBlock from "./EditInfoBlock/EditInfoBlock";
import EditActorsBlock from "./EditActorsBlock/EditActorsBlock";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {useNavigate, useParams} from "react-router-dom";

const PageEditFilm = () => {
        const {id} = useParams();
        const queryClient = useQueryClient();
        const navigate = useNavigate();
        const [error, setError] = useState('');

        const {data: infoFilm, isLoading} = useQuery({
            queryKey: ['infoFilm', id],
            queryFn: () => fetch(`/api/films/${id}/infoFilm`).then(res => res.json())
        });

        const [film, setFilm] = useState(infoFilm || {details: {}, aboutFilmEntity: {}});

        useEffect(() => {
            if (infoFilm) {
                setFilm(infoFilm);
            }
        }, [infoFilm]);

        const fetchTask = () => {
            queryClient.invalidateQueries(['films']);
        }

        const itemSplit = () => {
            film.details.starring = String(film.details.starring)
            film.details.starring = film.details.starring.split(',')
            film.details.rolesDuplicated = String(film.details.rolesDuplicated)
            film.details.rolesDuplicated = film.details.rolesDuplicated.split(',')
        }

        const editFilm = (e) => {
            if (!film.details.title || !film.details.description) {
                setError('**Поле обязательно для заполнения**')
            } else {
                e.preventDefault()
                itemSplit()
                fetch(`/api/films/${film.id}/infoFilm`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(film.details),
                }).then(fetchTask);
                navigate(`/listFilms`);
            }
        };

        return isLoading
            ? console.log('Loading...')
            : (
                <div className="pageEditFilm">
                    <div className="pageAddFilm">
                        <div className="flexPage">
                            <EditPhotoBlock film={film} setFilm={setFilm}/>
                            <EditInfoBlock error={error} film={film} setFilm={setFilm}/>
                            <EditActorsBlock film={film} setFilm={setFilm}/>
                        </div>
                        <Button className="blockPage" variant="contained" color="success" type="submit" onClick={editFilm}>
                            Редактировать
                        </Button>
                    </div>
                </div>
            );
    }
;

export default PageEditFilm;