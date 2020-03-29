import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

import styles from "./sectionStyle";
import image1 from "../../assets/img/home/01.jpg";
import image2 from "../../assets/img/home/02.jpg";
import image3 from "../../assets/img/home/03.jpg";

const useStyles = makeStyles(styles);

const SectionOne = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Lapasta-Hotel</h2>
          <h5 className={classes.description}></h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <img className={classes.roundImg} src={image1} width="50%" />
            <h3 className={classes.title}>在地小農食材</h3>
            <p className={classes.description}>
              Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod.
              Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce
              lorem leo, vehicula at nibh quis, facilisis accumsan turpis.
            </p>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <img className={classes.roundImg} src={image2} width="50%" />
            <h3 className={classes.title}>米其林行政主廚</h3>
            <p className={classes.description}>
              Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod.
              Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce
              lorem leo, vehicula at nibh quis, facilisis accumsan turpis.
            </p>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <img className={classes.roundImg} src={image3} width="50%" />
            <h3 className={classes.title}>堅持專注品質</h3>
            <p className={classes.description}>
              Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod.
              Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce
              lorem leo, vehicula at nibh quis, facilisis accumsan turpis.
            </p>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

export default SectionOne;
