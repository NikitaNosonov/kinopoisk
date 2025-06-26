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
            queryFn: () => fetch(`/api/films/${id}/infoFilm`).then(res => res.json())
        }
    );
    console.log(infoFilm);

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