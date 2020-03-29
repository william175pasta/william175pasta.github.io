import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import workStyle from "./workStyle";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import logo1 from "../../images/logo/01.jpg";

import PersonIcon from "@material-ui/icons/Person";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import StarsIcon from "@material-ui/icons/Stars";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const useStyles = makeStyles(workStyle);

const Work1 = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img src={logo1} style={{ width: "100%", height: "140px" }} />
        <CardContent>
          <h2 className={classes.worktitle}>175PASTA</h2>

          <p>
            <PersonIcon fontSize="large" />
            &emsp;西餐廚師
            <br />
            <AccessTimeIcon fontSize="large" />
            &emsp;2013年5月～2017年3月
            <br />
            <MenuBookIcon fontSize="large" />
            &emsp;資方經營模式與角度
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
export default Work1;
