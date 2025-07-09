import React from 'react';
import {Button} from "@mui/material";
import EditPhotoBlock from "./EditPhotoBlock/EditPhotoBlock";
import EditInfoBlock from "./EditInfoBlock/EditInfoBlock";
import EditActorsBlock from "./EditActorsBlock/EditActorsBlock";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {useNavigate, useParams} from "react-router-dom";
import {Film} from "../../../shared/typesData";

const PageEditFilm: React.FC = () => {
        const {id} = useParams();
        const queryClient = useQueryClient();
        const navigate = useNavigate();
        const [error, setError] = React.useState('');

        const {data: infoFilm} = useQuery<Film>({
            queryKey: ['infoFilm', id],
            queryFn: () => fetch(`https://246b98815ac8edb9.mokky.dev/listFilms/${id}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => res.json())
        });

        const fetchTask = () => {
            queryClient.invalidateQueries({queryKey: ['films']});
        }

        const editFilm = (e: React.MouseEvent) => {
            if (!infoFilm?.details?.title || !infoFilm?.details?.fullDescription) {
                setError('**Поле обязательно для заполнения**')
            } else {
                e.preventDefault()
                fetch(`https://246b98815ac8edb9.mokky.dev/listFilms/${infoFilm.id}`, {
                    method: "PATCH",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(infoFilm),
                }).then(fetchTask)
                navigate(`/admin/listFilms`);
            }
        };

        return (
            <div className="pageEditFilm">
                <div className="pageAddFilm">
                    <div className="flexPage">
                        <EditPhotoBlock film={infoFilm} setFilm={(newFilm: Film) => queryClient.setQueryData(['infoFilm', id], newFilm)}/>
                        <EditInfoBlock error={error} film={infoFilm} setFilm={(newFilm: Film) => queryClient.setQueryData(['infoFilm', id], newFilm)}/>
                        <EditActorsBlock film={infoFilm} setFilm={(newFilm: Film) => queryClient.setQueryData(['infoFilm', id], newFilm)}/>
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