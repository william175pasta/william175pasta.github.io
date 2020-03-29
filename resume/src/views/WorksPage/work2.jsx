import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import workStyle from "./workStyle";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import logo2 from "../../images/logo/02.jpg";
import PersonIcon from "@material-ui/icons/Person";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MenuBookIcon from "@material-ui/icons/MenuBook";
const useStyles = makeStyles(workStyle);

const Work2 = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img src={logo2} style={{ width: "100%", height: "140px" }} />
        <CardContent>
          <h2 className={classes.worktitle}>義響食堂</h2>
          <p>
            <PersonIcon fontSize="large" />
            &emsp;西餐廚師
            <br />
            <AccessTimeIcon fontSize="large" />
            &emsp;2017年2月～2017年6月
            <br />
            <MenuBookIcon fontSize="large" />
            &emsp;飯店規模營運模式與行為
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
export default Work2;
