import {http, HttpResponse} from "msw";
import {listFilmsEntity, infoFilmEntity} from "./db"

const filmsHandler = [
    http.get("/api/films", () => {
        return HttpResponse.json(listFilmsEntity);
    }),

    http.post("/api/films", async ({request}) => {
        const newFilm = await request.json();
        listFilmsEntity.push(newFilm);
        return HttpResponse.json(newFilm, {status: 200});
    }),

    http.delete("/api/films/:id", ({params}) => {
        const listEntity = listFilmsEntity.findIndex(f => f.id === Number(params.id));
        const filmEntity = infoFilmEntity.findIndex(e => e.id === listEntity.infoFilmId);
        listFilmsEntity.splice(listEntity, 1)
        infoFilmEntity.splice(filmEntity, 1)
        return new HttpResponse({status: 200});
    }),

    http.put("/api/films/:id", async ({request, params}) => {
        const updatedData = await request.json();
        const filmIndex = listFilmsEntity.findIndex(item => item.id === Number(params.id));

        listFilmsEntity[filmIndex] = {
            ...listFilmsEntity[filmIndex],
            ...updatedData
        };

        return HttpResponse.json(listFilmsEntity[filmIndex], {status: 200});
    }),

    http.get("/api/films/:id/infoFilm", ({params}) => {
        const listEntity = listFilmsEntity.find(e => e.id === Number(params.id));
        const infoEntity = infoFilmEntity.find(e => e.id === listEntity.infoFilmId);

        return HttpResponse.json({
            ...listEntity,
            details: infoEntity
        });
    }),

    http.post("/api/films/:id/infoFilm", async ({request}) => {
        const newFilm = await request.json();
        infoFilmEntity.push(newFilm);
        return HttpResponse.json(newFilm, {status: 200});
    }),

    http.put("/api/films/:id/infoFilm", async ({request, params}) => {
        const updatedData = await request.json();

        const listFilm = listFilmsEntity.find(item => item.id === Number(params.id));
        const infoFilmIndex = infoFilmEntity.findIndex(item => item.id === listFilm.infoFilmId);

        infoFilmEntity[infoFilmIndex] = {
            ...infoFilmEntity[infoFilmIndex],
            ...updatedData,
            id: listFilm.infoFilmId,
            listFilmsEntityId: listFilm.id
        };

        return HttpResponse.json(infoFilmEntity[infoFilmIndex], {status: 200});
    }),
]

export const hundlers = filmsHandler;