import React from 'react';
import {Film} from "../../../../types/typesData";
import "./MobileInfoFilm.css"
import {Box, Grid, Typography} from "@mui/material";

interface MobileInfoFIlmProps {
    infoFilm?: Film | undefined
}

const MobileInfoFIlm: React.FC<MobileInfoFIlmProps> = ({infoFilm}) => {
    return (
        <div>
            <Box className='mobileInfoFilm'>
                <Box className='poster'>
                    <img src={infoFilm?.poster} alt='poster'/>
                </Box>
                <Box className='title'>{infoFilm?.firstName}</Box>
                <Box className='content'>
                    <Box className='description1'>{infoFilm?.details.fullDescription}</Box>
                    <Box className='description2'>
                        {infoFilm?.details.aboutFilmEntity.yearProd}, {infoFilm?.details.aboutFilmEntity.genre}<br></br>
                        {infoFilm?.details.aboutFilmEntity.country}, {infoFilm?.details.aboutFilmEntity.time}
                    </Box>
                </Box>
                <Box className='content'>
                    <Box className='description1'>{infoFilm?.details.grades}</Box>
                </Box>

            </Box>
            <Box className='actorsBlock'>
                <Typography className='txt'>Актеры</Typography>
                <Grid className='actors'>
                        {infoFilm?.details.starring.map((star) => <Typography>{star}</Typography>)}
                </Grid>
            </Box>
        </div>
    );
};

export default MobileInfoFIlm;