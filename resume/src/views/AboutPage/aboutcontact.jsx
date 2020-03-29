import React from "react";

import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";

import style from "./aboutmePage";
const useStyles = makeStyles(style);

const Aboutcontact = () => {
  const classes = useStyles();

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8}>
        <div className={classes.aboutmeContact}>
          <h2 className={classes.contacttitle}>與我聯絡</h2>
          <p className={classes.contacttext}>Email : bill5986@gmail.com</p>
          <p className={classes.contacttext}>Phone : 0939774066</p>
          <p className={classes.contacttext}>
            Address : 新北市淡水區新春街119號
          </p>
        </div>
      </GridItem>
    </GridContainer>
  );
};
export default Aboutcontact;
