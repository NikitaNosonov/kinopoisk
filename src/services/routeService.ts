class Route {
    loginRoute: string = '/login'
    registerRoute: string = '/register'
    listFilmsRoute: string = '/listFilms'
    infoFilmRoute = (id: number | null) => `/film/${id}`
    addFilmRoute = (id: number | null) => `/addFilm/${id}`
    editFilmRoute = (id: number | null) => `/editFilm/${id}`
}

export default new Route;