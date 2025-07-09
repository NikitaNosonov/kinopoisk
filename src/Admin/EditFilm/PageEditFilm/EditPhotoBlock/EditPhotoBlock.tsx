import * as React from 'react';
import './EditPhotoBlock.css'
import {Film} from "../../../../shared/typesData";

interface EditPhotoBlockProps {
    film?: Film;
    setFilm: (film: Film) => void;
}

const EditPhotoBlock: React.FC<EditPhotoBlockProps> = ({film, setFilm}) => {
    const [isEditPhoto, setIsEditPhoto] = React.useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = _handleReaderLoaded;
            reader.readAsBinaryString(file);
        }
    };

    const editPhoto = () => {
        setIsEditPhoto(true);
    }

    const _handleReaderLoaded = (e: ProgressEvent<FileReader>) => {
        const binaryString = e.target?.result;
        if (binaryString && film) {
            setFilm({...film, poster: "data:image;base64," + btoa(binaryString as string) });
        }
    };

    return (
        <div className="editPhotoBlock">
            <div className="block">
                <img src={film?.poster} alt=""/>
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