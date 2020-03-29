import * as React from "react";
import PersonIcon from "@material-ui/icons/Person";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import StarsIcon from "@material-ui/icons/Stars";
import MenuBookIcon from "@material-ui/icons/MenuBook";

import Grid from "@material-ui/core/Grid";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import Work1 from "./work1";
import Work2 from "./work2";
import Work3 from "./work3";

import { makeStyles } from "@material-ui/core/styles";
import styles from "./workpage";

const useStyles = makeStyles(styles);

const WorksPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.background}>
        <Header color="dark" />

        <div className={classes.container}>
          <Grid item xs={12} className={classes.title}>
            <h1>Experience</h1>
          </Grid>

          <div className={classes.root}>
            <GridContainer>
              <GridItem item xs={12} sm={4}>
                <Work1 />
              </GridItem>
              <GridItem item xs={12} sm={4}>
                <Work2 />
              </GridItem>
              <GridItem item xs={12} sm={4}>
                <Work3 />
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default WorksPage;
