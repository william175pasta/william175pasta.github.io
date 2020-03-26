import React from "react";
import Grid from "@material-ui/core/Grid";

import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import Carousel from "./Carousel";
import Aboutme from "./aboutme";

import Aboutcontact from "./aboutcontact";

import { makeStyles } from "@material-ui/core/styles";
import styles from "./aboutmePage";
import image from "../../assets/img/home/bg.jpg";

const useStyles = makeStyles(styles);
/**
 * 關於我介紹
 * @param {*} props
 */

const AboutPage = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.background}>
        <Header color="dark" />
        <Grid item xs={12}>
          <Carousel />
        </Grid>
        {/* Aboutme */}
        <Grid item xs={12}>
          <Aboutme />
        </Grid>
        <Grid item xs={12}>
          <Aboutcontact />
        </Grid>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
