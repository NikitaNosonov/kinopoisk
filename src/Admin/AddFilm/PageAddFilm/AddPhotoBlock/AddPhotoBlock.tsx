import React from 'react';
import './AddPhotoBlock.css'
import {Film} from "../../../../shared/typesData";

interface AddPhotoBlockProps {
    infoFilm?: Film,
}

const AddPhotoBlock: React.FC<AddPhotoBlockProps> = ({infoFilm}) => {
    return (
        <div className="addPhotoBlock">
            <div className="block">
                <img src={infoFilm?.poster} alt=''/>
                <button className="btn">Добавить папку</button>
            </div>
        </div>
    );
};

export default AddPhotoBlock;