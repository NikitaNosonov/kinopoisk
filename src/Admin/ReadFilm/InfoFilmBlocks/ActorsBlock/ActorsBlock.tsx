import React from 'react';
import './ActorsBlock.css'
import {Film} from "../../../../shared/typesData";

interface ActorBlockProps {
    infoFilm?: Film;
}

const ActorsBlock: React.FC<ActorBlockProps> = ({infoFilm}) => {
    return (
        <div className="ActorsBlock">
            <p style={{fontSize: "14px"}}>{infoFilm?.details.grades}</p>
            <button className="btn" style={{width: "200px"}}>Оценить фильм</button>
            <div className="actors">
                <p style={{paddingTop: "20px", paddingBottom: "80px", fontSize: "14px", color: "rgb(157, 156, 156)"}}>
                    {infoFilm?.details.review}
                </p>
                <h4>В главных ролях &gt;</h4>
                {infoFilm?.details.starring.map((star: string) => <p>{star}</p>)}
                <h5>{infoFilm?.details.colStarring}</h5>
                <h4>Роли дублировали &gt;</h4>
                {infoFilm?.details.rolesDuplicated.map((rol: string) => <p>{rol}</p>)}
                <h5>{infoFilm?.details.colRolesDuplicated}</h5>
            </div>
        </div>
    );
};

export default ActorsBlock;