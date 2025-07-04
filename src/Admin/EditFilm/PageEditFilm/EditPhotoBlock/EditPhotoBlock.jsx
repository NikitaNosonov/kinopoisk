import React, {useState} from 'react';
import './EditPhotoBlock.css'
import {Button} from "@mui/material";

const EditPhotoBlock = (props) => {
    const [isEditPhoto, setIsEditPhoto] = useState(false);

    const onChange = (e) => {
        let file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = _handleReaderLoaded;
            reader.readAsBinaryString(file);
        }
    };

    const editPhoto = () => {
        setIsEditPhoto(true);
    }

    const _handleReaderLoaded = (e) => {
        let binaryString = e.target.result;
        props.setFilm({...props.film, poster: "data:image;base64," + btoa(binaryString)});
    };

    return (
        <div className="editPhotoBlock">
            <div className="block">
                <img src={props.film.poster} alt=""/>
                {isEditPhoto ? <input
                    type="file"
                    name="image"
                    id="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={e => {
                        onChange(e)
                    }}
                /> : <button className="btn" onClick={editPhoto}>Изменить постер</button>
                }
                <button className="btn">Добавить папку</button>
            </div>

        </div>
    );
};

export default EditPhotoBlock;