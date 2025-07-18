import {action, makeAutoObservable, runInAction} from "mobx";
import {Film} from "../types/typesData";
import fetchFilm from "../services/filmService"
import React from "react";

class FilmStore {
    public film: Film[] = [];
    public filmById?: Film;
    public filmStart: Film[] = [];

    constructor() {
        makeAutoObservable(this)
    }

    fetchFilm = action(async () => {
        const data = await fetchFilm.getFilm();
        runInAction(() => {
            this.film = data
        });
    })

    fetchStart = action(async (num: number | null) => {
        const data = await fetchFilm.getStartFilm(num);
        console.log(data)
        runInAction(() => {
            this.filmStart = data;
            console.log(this.filmStart)
        });
    })

    fetchFilmId = action(async (id: number | null) => {
        const data = await fetchFilm.getFilmById(id);
        runInAction(() => {
            this.filmById = data;
        });
    })

    fetchEditFilm = action(async (id: number | null, editedFilm: Film) => {
        const data = await fetchFilm.editFilm(id, editedFilm);
        runInAction(() => {
            this.filmById = data;
        })
    })

    getCookie(name: string) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    setCookie(name: string, value: string, options: Record<string, any> = {} = {}) {

        options = {
            path: '/',
            ...options
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }


    deleteCookie(name: string) {
        this.setCookie(name, "", {
            'max-age': -1
        })
    }
}

export default new FilmStore()