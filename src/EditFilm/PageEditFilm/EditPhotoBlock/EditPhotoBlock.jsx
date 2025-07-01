import React from 'react';
import './EditPhotoBlock.css'

const EditPhotoBlock = (props) => {
    return (
        <div className="editPhotoBlock">
            <div className="block">
                <img src={props.film.poster} alt=""/>
                <button className="btn">Добавить папку</button>
            </div>

        </div>
    );
};

export default EditPhotoBlock;