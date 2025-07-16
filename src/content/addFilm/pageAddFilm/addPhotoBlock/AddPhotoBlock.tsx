import React from 'react';
import './AddPhotoBlock.css'
import {Film} from "../../../../shared/typesData";

interface AddPhotoBlockProps {
    film?: Film,
    setFilm?: (value: (((prevState: Film) => Film) | Film)) => void | undefined,
    error?: string
}

const AddPhotoBlock: React.FC<AddPhotoBlockProps> = ({film, setFilm, error}) => {
    const [isAddPhoto, setIsAddPhoto] = React.useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = _handleReaderLoaded;
            reader.readAsBinaryString(file);
        }
    };

    const _handleReaderLoaded = (e: ProgressEvent<FileReader>) => {
        const binaryString = e.target?.result;
        if (film && setFilm) {
            setFilm({...film, poster: "data:image;base64," + btoa(binaryString as string)});
        }
    };

    return (
        <div className="addPhotoBlock">
            <div className="block">
                <div className='poster'>
                    {isAddPhoto ? <input
                        type="file"
                        name="image"
                        id="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={e => onChange(e)}
                    /> : <button className="btn" onClick={() => setIsAddPhoto(true)}>Добавить постер</button>}
                </div>
                {(film) ? film.poster != null && <img className='.img' src={film.poster} alt=''/> : <p></p>}
            </div>
        </div>
    );
};

export default AddPhotoBlock;