import {action, makeAutoObservable, runInAction} from "mobx";
import {Film} from "./typesData";
import React from "react";

class FilmStore {
    public film: Film[] = [];
    public filmById?: Film;

    public filmStart: Film[] = [];

    constructor() {
        makeAutoObservable(this)
    }

    fetchFilm = action(async () => {
        const response = await fetch('https://246b98815ac8edb9.mokky.dev/listFilms', {
            headers: {
                "Authorization": `Bearer ${this.getCookie("token")}`
            }
        });
        const json = await response.json();

        runInAction(() => {
            this.film = json;
        });
    })

    fetchStart = action(async (num: number) => {
        const response = await  fetch(`https://246b98815ac8edb9.mokky.dev/listFilms?page=${num}&limit=5`, {
            headers: {
                "Authorization": `Bearer ${this.getCookie("token")}`
            }
        });
        const json = await response.json();

        runInAction(() => {
            this.filmStart = json.items;
        });
    })

    fetchFilmId = action(async (id: number | null) => {
        const response = await fetch(`https://246b98815ac8edb9.mokky.dev/listFilms/${id}`, {
            headers: {
                "Authorization": `Bearer ${this.getCookie("token")}`
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
                "Authorization": `Bearer ${this.getCookie("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedFilm),
        });
        const json: Film = await response.json();

        runInAction(() => {
            this.filmById = json;
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

    // fetchDeleteFilm = action(async (id: number | null, event: React.MouseEvent) => {
    //     event.preventDefault();
    //     await fetch(`https://246b98815ac8edb9.mokky.dev/listFilms/${id}`,
    //         {
    //             headers: {
    //                 "Authorization": `Bearer ${localStorage.getItem('token')}`
    //             },
    //             method: 'DELETE'
    //         })
    //     await this.fetchFilm()
    //
    // })
}

export default new FilmStore()