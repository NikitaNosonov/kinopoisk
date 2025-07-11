import React from "react"
import './ListFilmBlocksUser.css'
import ItemFilmBlocksUser from "./itemFilmBlocks/ItemFilmBlocksUser";
import {observer} from "mobx-react-lite";
import filmData from "../../../shared/filmStore";


const ListFilmBlocks: React.FC = observer(() => {
    React.useEffect(() => {
        filmData.fetchFilm();
    }, []);

    const films = filmData.film

    return (
        <div className="ListFilmBlocksUser">
            <div>
                <h1>Список фильмов</h1>
            </div>
            {films?.map((films) => (
                <ItemFilmBlocksUser films={films} key={films.id}/>
            ))}
        </div>
    );
});

export default ListFilmBlocks;