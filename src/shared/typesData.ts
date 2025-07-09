import { JwtPayload } from 'jwt-decode';

export interface token extends JwtPayload {
    role: string;
    username: string;
}

export interface Film {
    poster: string;
    id: number | null;
    firstName: string;
    secondName: string;
    description: string;
    grade: string;
    details: {
        title: string;
        fullDescription: string;
        grades: string;
        review: string;
        aboutFilmEntity: {
            yearProd: number | null;
            country: string;
            genre: string;
            slogan: string;
            director: string;
            script: string;
            producer: string;
            operator: string;
            composer: string;
            artist: string;
            montage: string;
            budget: string;
            feesInTheUSA: string;
            feesInTheWorld: string;
            feesInTheRussian: string;
            premiereInRussia: string;
            premiereInWorld: string;
            releaseOnDVD: string;
            releaseOnBluRay: string;
            age: string;
            ratingMPAA: string;
            time: string;
        }
        starring: string[];
        colStarring: string;
        rolesDuplicated: string[];
        colRolesDuplicated: string;
    }
}