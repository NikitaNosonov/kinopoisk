import React from 'react';
import {Button, TextField} from "@mui/material";
import './AddActorsBlock.css'

const AddActorsBlock = () => {

    return (
        <div className="addActorsBlock">
            <TextField
                size="small"
                placeholder="Количество оценок"/>
            <button className="btn" style={{width: "200px"}}>Оценить фильм</button>
            <div className="actors">
                <TextField
                    size="small"
                    placeholder="Количество рецензий"
                    style={{marginTop: '20px', marginBottom: '80px'}}/>
                <h4>В главных ролях ></h4>
                <TextField
                    size="small"
                    placeholder="Актеры"/>
                <TextField
                    size="small"
                    placeholder="Количество актеров"
                    style={{marginTop: '20px', marginBottom: '20px'}}/>
                <h4>Роли дублировали ></h4>
                <TextField
                    size="small"
                    placeholder="Количество актеров"/>
            </div>
        </div>
    );
};

export default AddActorsBlock;