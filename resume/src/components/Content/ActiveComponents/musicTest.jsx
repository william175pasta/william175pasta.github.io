import React, { useState, useContext, useReducer, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';


const MusicTest = () => {

    return (
        <React.Fragment>
            <Grid item xs={12} sm={6} className="cardsContent" >
                <iframe width="100%" src="https://www.youtube.com/embed/7sS4PRhhJYU"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" >
                </iframe>
            </Grid>
            <Grid item xs={12} sm={6} className="cardsContent" >
                <iframe width="100%" src="https://www.youtube.com/embed/omwngAlNG6Q"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </Grid>
        </React.Fragment>


    )
}
export default MusicTest