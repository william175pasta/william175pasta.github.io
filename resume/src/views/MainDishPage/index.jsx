import React, { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";

import Grid from "@material-ui/core/Grid";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Dish1 from "./dish1";
import Dish2 from "./dish2";
import Dish3 from "./dish3";

// import FoodPractices from "../../components/Content/AboutComponents/FoodPractices";

// import pic1 from "../../images/sauce/red/redlogo.png";
// import pic2 from "../../images/sauce/green/greenlogo.png";
// import pic3 from "../../images/sauce/white/whitelogo.jpg";

// import { NavLink } from "react-router-dom";

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
            <h1>MainDishPage</h1>
          </Grid>

          <div className={classes.root}>
            <GridContainer>
              <GridItem item xs={12} sm={4}>
                <Dish1 />
              </GridItem>
              <GridItem item xs={12} sm={4}>
                <Dish2 />
              </GridItem>
              <GridItem item xs={12} sm={4}>
                <Dish3 />
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
