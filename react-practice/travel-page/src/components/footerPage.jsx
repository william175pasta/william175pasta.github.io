import React from "react";
import styles from "./footerStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <p>Copyright © 2020_william</p>
    </footer>
  );
};

export default Footer;
