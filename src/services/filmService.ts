import {action} from "mobx";
import filmStore from "../store/filmStore";
import {Film} from "../types/typesData";

class FetchFilm {
    public api: string = 'https://246b98815ac8edb9.mokky.dev/listFilms'

    getFilm = async () => {
        const response = await fetch(this.api, {
            headers: {
                "Authorization": `Bearer ${filmStore.getCookie("token")}`
            }
        });
        return await response.json();
    }

    getStartFilm = async (num: number | null) => {
        const response = await  fetch(`${this.api}?page=${num}&limit=5`, {
            headers: {
                "Authorization": `Bearer ${filmStore.getCookie("token")}`
            }
        });
        return await response.json();
    }

    getFilmById = async (id: number | null) => {
        const response = await fetch(`${this.api}/${id}`, {
            headers: {
                "Authorization": `Bearer ${filmStore.getCookie("token")}`
            }
        });
        return await response.json();
    }

    editFilm = async (id: number | null, film: Film) => {
        const response = await fetch(`${this.api}/${id}`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${filmStore.getCookie("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(film),
        });
        return await response.json();
    }

    deleteFilm = async (id: number | null) => {
        await fetch(`${this.api}/${id}`,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getCookie('token')}`
                },
                method: 'DELETE'
            })
        await this.getStartFilm(1)
    }

    addFilm = (async (newFilm: {
        id: number | null;
        poster: string;
        firstName: string;
        secondName: string;
        description: string;
        grade: string;
        details: {}
    }) => {
        fetch(`https://246b98815ac8edb9.mokky.dev/listFilms`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${filmStore.getCookie('token')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...newFilm,
                details: {}
            })
        })
    })
}

export default new FetchFilm()