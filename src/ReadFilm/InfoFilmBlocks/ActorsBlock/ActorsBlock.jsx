import React from 'react';
import './ActorsBlock.css'

const ActorsBlock = (props) => {
    return (
        <div className="ActorsBlock">
            <p style={{fontSize: "14px"}}>{props.infoFilm.details.grades}</p>
            <button className="btn" style={{width: "200px"}}>Оценить фильм</button>
            <div className="actors">
                <p style={{paddingTop: "20px", paddingBottom: "80px", fontSize: "14px", color: "rgb(157, 156, 156)"}}>
                    {props.infoFilm.details.review}
                </p>
                <h4>В главных ролях ></h4>
                {props.infoFilm.details.starring.map(star => (
                    <p>{star}</p>
                ))}
                <h5>{props.infoFilm.details.colStarring}</h5>
                <h4>Роли дублировали ></h4>
                {props.infoFilm.details.rolesDuplicated.map(rol => (
                    <p>{rol}</p>
                ))}
                <h5>{props.infoFilm.details.colRolesDuplicated}</h5>
            </div>
        </div>
    );
};

export default ActorsBlock;