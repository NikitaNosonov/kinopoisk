import React from 'react';
import './InfoFilmBlocks.css'
import PhotoBlock from "./photoBlock/PhotoBlock";
import InfoBlock from "./infoBlock/InfoBlock";
import ActorsBlock from "./actorsBlock/ActorsBlock";
import {useParams} from "react-router-dom";
import filmStore from "../../../shared/filmStore";
import {observer} from "mobx-react-lite";


const InfoFilmBlocks:React.FC = observer(() => {
    const { id } = useParams();
    const numericId = id ? Number(id) : null;

    React.useEffect(() => {
        if (numericId !== null) {
            filmStore.fetchFilmId(numericId);
        }
    }, [numericId]);
    const infoFilm = filmStore.filmById

    return (
        <div className="infoFilm">
            <PhotoBlock infoFilm={infoFilm}/>
            <InfoBlock infoFilm={infoFilm}/>
            <ActorsBlock infoFilm={infoFilm} key={id}/>
        </div>
    );
});

export default InfoFilmBlocks;