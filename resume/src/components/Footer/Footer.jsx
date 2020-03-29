import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    fontSize: "14px",
    padding: "10px",
    position: "relative",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#f5f5f5",
    marginTop: "50px"
  },
  list: {
    listStyleType: "none",
    textAlign: "center",
    margin: "0 10px"
  },
  a: {
    color: "#000"
  },
  iconBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "80px"
  },
  copyRiBox: {
    height: "40px",
    lineHeight: "40px"
  }
}));

const Footer = props => {
  const classes = useStyles();
  return (
    <footer style={{ marginTop: "110px" }}>
      <div className={classes.root}>
        <Grid container spacing={4} className={classes.iconBox}>
          <li className={classes.list}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              title="Facebook"
              className={classes.a}
            >
              <FacebookIcon style={{ fontSize: 30 }} />
            </a>
          </li>
          <li className={classes.list}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              title="Instagram"
              className={classes.a}
            >
              <InstagramIcon style={{ fontSize: 30 }} />
            </a>
          </li>
          <li className={classes.list}>
            <a
              href="https://github.com/william175pasta"
              target="_blank"
              title="GitHub"
              className={classes.a}
            >
              <GitHubIcon style={{ fontSize: 30 }} />
            </a>
          </li>
        </Grid>
        <Grid item xs={12} sm={12} className={classes.copyRiBox}>
          <li className={classes.list} style={{ color: "#000" }}>
            &copy; Copy Posted by : william 2020
          </li>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
