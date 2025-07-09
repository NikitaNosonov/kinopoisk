import React from "react"
import './ListFilmBlocksUser.css'
import ItemFilmBlocksUser from "./ItemFilmBlocks/ItemFilmBlocksUser";
import {useQuery} from '@tanstack/react-query';
import {Film} from '../../../shared/typesData'


const ListFilmBlocks: React.FC = () => {

    const {data: films} = useQuery<Film[]>({
            queryKey: ['films'],
            queryFn: () => fetch('https://246b98815ac8edb9.mokky.dev/listFilms', {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => res.json())
        }
    );

    return (
        <div className="ListFilmBlocksUser">
            <div>
                <h1>Список фильмов</h1>
            </div>
            {films?.map((films: Film) => (
                <ItemFilmBlocksUser films={films} key={films.id}/>
            ))}
        </div>
    );
};

export default ListFilmBlocks;