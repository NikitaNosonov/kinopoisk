import React, {useState} from 'react';
import './AddPhotoBlock.css'

const AddPhotoBlock = (props) => {
    return (
        <div className="addPhotoBlock">
            <div className="block">
                <img src={props.infoFilm.poster} alt=''/>
                <button className="btn">Добавить папку</button>
            </div>
        </div>
    );
};

export default AddPhotoBlock;