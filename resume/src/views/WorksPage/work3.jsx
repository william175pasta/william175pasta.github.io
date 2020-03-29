import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import workStyle from "./workStyle";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import logo3 from "../../images/logo/03.jpg";
import PersonIcon from "@material-ui/icons/Person";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import StarsIcon from "@material-ui/icons/Stars";
import MenuBookIcon from "@material-ui/icons/MenuBook";
const useStyles = makeStyles(workStyle);
const Work3 = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img src={logo3} style={{ width: "100%", height: "140px" }} />
        <CardContent>
          <h2>Lapasta義麵屋</h2>
          <p>
            <PersonIcon fontSize="large" />
            &emsp;西餐一廚
            <br />
            <AccessTimeIcon fontSize="large" />
            &emsp;2017年7月～2019年12月
            <br />
            <MenuBookIcon fontSize="large" />
            &emsp;中央廚房營運模式與行為
          </p>
        </CardContent>
      </CardActionArea>
      <div className={classes.activeArea}>
        <a
          href="#"
          className={classes.activeBtn}
          style={{ textDecoration: "none" }}
        >
          Learn More
        </a>
      </div>
    </Card>
  );
};
export default Work3;
