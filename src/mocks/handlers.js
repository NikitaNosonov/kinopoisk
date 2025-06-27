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

    http.get("/api/films/:id/infoFilm", ({params}) => {
        const listEntity = listFilmsEntity.find(e => e.id === Number(params.id));
        const infoEntity = infoFilmEntity.find(e => e.id === listEntity.infoFilmId);

        return Response.json({
            ...listEntity,
            details: infoEntity
        });
    }),

    http.post("/api/films/:id/infoFilm", async ({request}) => {
        const newFilm = await request.json();
        infoFilmEntity.push(newFilm);
        return HttpResponse.json(newFilm, {status: 200});
    }),

    http.delete("/api/films/:id", ({params}) => {
        const listEntity = listFilmsEntity.filter(f => f.id !== Number(params.id));

        listFilmsEntity.splice(listEntity, 1)
        return new HttpResponse({success: true, message: "Film deleted successfully"});
    }),
]

export const hundlers = filmsHandler;