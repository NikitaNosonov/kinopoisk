import React, {useState} from 'react';
import './ListFilmBlocksUser.css'
import ItemFilmBlocksUser from "./ItemFilmBlocks/ItemFilmBlocksUser";
import {useQuery} from '@tanstack/react-query';


const ListFilmBlocks = () => {

    const {data: films, isLoading} = useQuery({
            queryKey: ['films'],
            queryFn: () => fetch('/api/films').then(res => res.json())
        }
    );

    return isLoading
        ? console.log('Loading...')
        : (
            <div className="ListFilmBlocksUser">
                <div>
                    <h1>Список фильмов</h1>
                </div>
                {films?.map((films, index) => (
                    <ItemFilmBlocksUser films={films} key={films.id} index={index + 1}/>
                ))}
            </div>
        );
};

export default ListFilmBlocks;