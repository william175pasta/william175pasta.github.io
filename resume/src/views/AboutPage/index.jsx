import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import FoodPractices from '../../components/Content/AboutComponents/FoodPractices'
import { makeStyles } from '@material-ui/core/styles';

import logo1 from '../../images/sauce/red/redlogo.png'
import logo2 from '../../images/sauce/green/greenlogo.png'
import logo3 from '../../images/sauce/white/whitelogo.jpg'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import RestaurantIcon from '@material-ui/icons/Restaurant';
import ImageCarouselTwo from '../../components/Content/AboutComponents/ImageCarouselTwo'
import { NavLink } from "react-router-dom";

const user = {
    sauce: [
        {
            title: "TomatoSauce",
            desc: "紅醬-Recipe:"
        },
        {
            title: "BasilSauce",
            desc: "青醬-Recipe:"
        },
        {
            title: "CreamSauce",
            desc: "白醬-Recipe:"
        }
    ],
    title: ["About/Sauce", "ABOUT/作品"]
}


const AboutPage = (props) => {

    return (
        <div>
            <Header />
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Paper>
                        <Typography component="div" style={{ backgroundColor: '#eee', padding: '10px' }}>
                            <div >
                                <Grid container spacing={3} className="cards">
                                    <Grid item xs={12} >
                                        <h2>{user.title[0]}</h2>
                                    </Grid>
                                    <Grid item xs={12} sm={4} className="cardsContent" >

                                        <Card className="cardsContent">
                                            <NavLink to="/TableForTomato" >
                                                <CardActionArea>
                                                    <img src={logo1} style={{ width: '100%', height: '140px' }} />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            <RestaurantIcon />
                                                            {user.sauce[0].title}
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            {user.sauce[0].desc}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </NavLink>
                                            <CardActions >
                                                <FoodPractices name={user.sauce[0].title} />
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={4} className="cardsContent" >
                                        <Card className="cardsContent">
                                            <NavLink to="/TableForBacil">
                                                <CardActionArea>
                                                    <img src={logo2} style={{ width: '100%', height: '140px' }} />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            <RestaurantIcon />
                                                            {user.sauce[1].title}
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            {user.sauce[1].desc}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </NavLink>
                                            <CardActions>
                                                <FoodPractices name={user.sauce[1].title} />
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={4} className="cardsContent" >
                                        <Card className="cardsContent">
                                            <NavLink to="/TableForCream">
                                                <CardActionArea>
                                                    <img src={logo3} style={{ width: '100%', height: '140px' }} />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            <RestaurantIcon />
                                                            {user.sauce[2].title}
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            {user.sauce[2].desc}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </NavLink>
                                            <CardActions>
                                                <FoodPractices name={user.sauce[2].title} />
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <h2>{user.title[1]}</h2>
                                    </Grid>
                                    <ImageCarouselTwo />
                                </Grid>
                            </div >
                        </Typography>
                    </Paper>
                </Container >
            </React.Fragment >
            <Footer />
        </div >
    );
};



export default AboutPage;