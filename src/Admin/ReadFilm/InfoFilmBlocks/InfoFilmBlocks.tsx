import React from 'react';
import './InfoFilmBlocks.css'
import PhotoBlock from "./PhotoBlock/PhotoBlock";
import InfoBlock from "./InfoBlock/InfoBlock";
import ActorsBlock from "./ActorsBlock/ActorsBlock";
import {useQuery} from "@tanstack/react-query";
import {useLocation} from "react-router-dom";

const InfoFilmBlocks = () => {
    const location = useLocation();
    const { id } = location.state || {};

    const {data: infoFilm, isLoading} = useQuery({
            queryKey: ['infoFilm', id],
            queryFn: () => fetch(`https://246b98815ac8edb9.mokky.dev/listFilms/${id}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => res.json())
        }
    );

    return isLoading
        ? console.log('Loading...')
        : (
        <div className="infoFilm">
            <PhotoBlock infoFilm={infoFilm} />
            <InfoBlock infoFilm={infoFilm}/>
            <ActorsBlock infoFilm={infoFilm}/>
        </div>
    );
};

export default InfoFilmBlocks;