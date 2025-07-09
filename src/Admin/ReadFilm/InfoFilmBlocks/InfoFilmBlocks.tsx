import React from 'react';
import './InfoFilmBlocks.css'
import PhotoBlock from "./PhotoBlock/PhotoBlock";
import InfoBlock from "./InfoBlock/InfoBlock";
import ActorsBlock from "./ActorsBlock/ActorsBlock";
import {useQuery} from "@tanstack/react-query";
import {useLocation} from "react-router-dom";
import {Film} from "../../../shared/typesData";


const InfoFilmBlocks:React.FC = () => {
    const location = useLocation();
    const { id } = location.state || {};

    const {data: infoFilm} = useQuery<Film>({
            queryKey: ['infoFilm', id],
            queryFn: () => fetch(`https://246b98815ac8edb9.mokky.dev/listFilms/${id}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => res.json())
        }
    );

    return (
        <div className="infoFilm">
            <PhotoBlock infoFilm={infoFilm} />
            <InfoBlock infoFilm={infoFilm}/>
            <ActorsBlock infoFilm={infoFilm}/>
        </div>
    );
};

export default InfoFilmBlocks;