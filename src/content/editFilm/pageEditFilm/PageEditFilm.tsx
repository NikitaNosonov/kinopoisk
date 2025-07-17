import React from 'react';
import {Button} from "@mui/material";
import EditPhotoBlock from "./editPhotoBlock/EditPhotoBlock";
import EditInfoBlock from "./editInfoBlock/EditInfoBlock";
import EditActorsBlock from "./editActorsBlock/EditActorsBlock";
import {useNavigate} from "react-router-dom";
import {Film} from "../../../shared/typesData";
import filmStore from "../../../shared/filmStore";
import {observer} from "mobx-react-lite";

const PageEditFilm: React.FC = observer(() => {
    const navigate = useNavigate();
    const [error, setError] = React.useState('');
    const [editedFilm, setEditedFilm] = React.useState<Film | null>(filmStore.filmById || null)

    const editFilm = async (e: React.MouseEvent) => {
        if (!editedFilm?.details?.title || !editedFilm?.details?.fullDescription) {
            setError('**Поле обязательно для заполнения**')
        } else {
            e.preventDefault()
            await filmStore.fetchEditFilm(editedFilm.id, editedFilm)
            await navigate(`/listFilms`)
        }
    };
    return (
        <div className="pageEditFilm">
            <div className="pageAddFilm">
                <div className="flexPage">
                    <EditPhotoBlock film={editedFilm}
                                    setFilm={setEditedFilm}/>
                    <EditInfoBlock error={error} film={editedFilm}
                                   setFilm={setEditedFilm}/>
                    <EditActorsBlock film={editedFilm}
                                     setFilm={setEditedFilm}/>
                </div>
                <Button className="blockPage" variant="contained" color="success" type="submit" onClick={editFilm}>
                    Редактировать
                </Button>
            </div>
        </div>
    );
});

export default PageEditFilm;