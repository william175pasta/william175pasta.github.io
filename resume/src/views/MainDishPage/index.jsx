import React, { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";

import Grid from "@material-ui/core/Grid";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Dish1 from "./dish1";
import Dish2 from "./dish2";
import Dish3 from "./dish3";

import { makeStyles } from "@material-ui/core/styles";
import styles from "./mainDish";
const useStyles = makeStyles(styles);

/**
 * 顯示私房菜頁面
 * @param {*} props
 */
const MainDishPage = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.background}>
        <Header color="dark" />

        <div className={classes.container}>
          <Grid item xs={12} className={classes.title}>
            <h1>私房料理</h1>
          </Grid>

          <div className={classes.root}>
            <GridContainer>
              <GridItem item xs={12}>
                <Dish1 />
              </GridItem>
            </GridContainer>

            <GridContainer>
              <GridItem item xs={12}>
                <Dish2 />
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default MainDishPage;
