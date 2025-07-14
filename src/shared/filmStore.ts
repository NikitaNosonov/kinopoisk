import {action, makeAutoObservable, runInAction} from "mobx";
import {Film} from "./typesData";

class FilmStore {
    public film: Film[] = [];
    public filmById?: Film;
    // public filmStart: Film[] = [];

    constructor() {
        makeAutoObservable(this)
    }

    fetchFilm = action(async () => {
        const response = await fetch('https://246b98815ac8edb9.mokky.dev/listFilms', {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        });
        const json = await response.json();

        runInAction(() => {
            this.film = json;
        });
    })

    // fetchStart = action(async () => {
    //     const response = await  fetch('https://246b98815ac8edb9.mokky.dev/listFilms?page=1&limit=5', {
    //         headers: {
    //             "Authorization": `Bearer ${localStorage.getItem('token')}`
    //         }
    //     });
    //     const json = await response.json();
    //
    //     runInAction(() => {
    //         this.filmStart = json.items;
    //     });
    // })

    fetchFilmId = action(async (id: number | null) => {
        const response = await fetch(`https://246b98815ac8edb9.mokky.dev/listFilms/${id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        });
        const json: Film = await response.json();

        runInAction(() => {
            this.filmById = json;
        });
    })

    fetchEditFilm = action(async (id: number | null, editedFilm: Film) => {
        const response = await fetch(`https://246b98815ac8edb9.mokky.dev/listFilms/${id}`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedFilm),
        });
        const json: Film = await response.json();

        runInAction(() => {
            this.filmById = json;
        })
    })
}

export default new FilmStore()