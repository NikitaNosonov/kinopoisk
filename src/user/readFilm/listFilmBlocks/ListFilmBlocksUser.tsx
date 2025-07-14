import React from "react"
import './ListFilmBlocksUser.css'
import ItemFilmBlocksUser from "./itemFilmBlocks/ItemFilmBlocksUser";
import {observer} from "mobx-react-lite";
import filmStore from "../../../shared/filmStore";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const ListFilmBlocks: React.FC = observer(() => {

    let count = 1

    React.useEffect(() => {
        filmStore.fetchStart(count);
    }, []);

    const numPage = () => {
        filmStore.fetchFilm();
        if (filmStore.film.length < 5) {
            return count = 1
        } else if (filmStore.film.length === 5) {
            return 1
        } else if (filmStore.film.length > 5) {
            return count = Math.ceil(filmStore.film.length / 5)
        }
    }
    numPage()

    const handlePageChange = async (event: React.ChangeEvent<unknown>, page: number) => {
        filmStore.fetchStart(page);
    };

    return (
        <div className="ListFilmBlocksUser">
            <div>
                <h1>Список фильмов</h1>
            </div>
            {filmStore.filmStart?.map((films) => (
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