import React from "react"
import './ListFilmBlocksUser.css'
import ItemFilmBlocksUser from "./itemFilmBlocks/ItemFilmBlocksUser";
import {observer} from "mobx-react-lite";
import filmData from "../../../shared/filmStore";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const ListFilmBlocks: React.FC = observer(() => {

    React.useEffect(() => {
        filmData.fetchFilm();
        const fetched = async () => {
            const res = await fetch(
                `https://246b98815ac8edb9.mokky.dev/listFilms?page=1&limit=5`,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await res.json();
            setFilms(data.items)
        }
        fetched();
    }, []);

    const [films, setFilms] = React.useState(filmData.film)

    let count = 0
    const numPage = () => {
        if (filmData.film.length < 5) {
            return count = 1
        } else if (filmData.film.length > 5) {
            return count = Math.ceil(filmData.film.length / 5)
        }
    }
    numPage()

    const handlePageChange = async (event: React.ChangeEvent<unknown>, page: number) => {
        const res = await fetch(
            `https://246b98815ac8edb9.mokky.dev/listFilms?page=${page}&limit=5`,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await res.json();
        setFilms(data.items)
    };

    return (
        <div className="ListFilmBlocksUser">
            <div>
                <h1>Список фильмов</h1>
            </div>
            {films?.map((films) => (
                <ItemFilmBlocksUser films={films} key={films.id}/>
            ))}
            <Stack spacing={1}>
                <Pagination count={count}
                            shape="rounded"
                            onChange={handlePageChange}
                            className="pagination"/>
            </Stack>
        </div>
    );
});

export default ListFilmBlocks;