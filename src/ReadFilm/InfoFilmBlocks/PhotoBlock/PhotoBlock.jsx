import React from 'react';
import './PhotoBlock.css'

const PhotoBlock = (props) => {
    return (
        <div className="photo-block">
            <div className="block">
                <img src={props.infoFilm.poster} alt=""/>
                <button className="btn">Добавить папку</button>
            </div>
        </div>
    );
};

export default PhotoBlock;