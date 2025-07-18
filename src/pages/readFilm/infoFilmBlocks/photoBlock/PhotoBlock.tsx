import React from 'react';
import './PhotoBlock.css'
import {Film} from "../../../../types/typesData";

interface PhotoBlockProps {
    infoFilm?: Film | null
}

const PhotoBlock: React.FC<PhotoBlockProps> = ({infoFilm}) => {
    return (
        <div className="photo-block">
            <div className="block">
                <img src={infoFilm?.poster} alt=""/>
                <button className="btn">Добавить папку</button>
            </div>
        </div>
    );
};

export default PhotoBlock;