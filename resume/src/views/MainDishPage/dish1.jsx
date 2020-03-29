import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import dishStyle from "./dishStyle";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import logo1 from "../../images/sauce/red/redlogo.png";
import { NavLink } from "react-router-dom";
import ModalPopup from "../../components/Content/AboutComponents/modalPopup";

const useStyles = makeStyles(dishStyle);

const user = {
  sauce: [
    {
      title: "TomatoSauce"
    },
    {
      title: "BasilSauce"
    },
    {
      title: "CreamSauce"
    }
  ]
};
const Dish1 = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <NavLink to="/TableForBacil" style={{ textDecoration: "none" }}>
        <CardActionArea>
          <img src={logo1} style={{ width: "100%", height: "140px" }} />
          <CardContent>
            <h2>TomatoSauce</h2>
            <p>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </p>
          </CardContent>
        </CardActionArea>
      </NavLink>
      <div className={classes.activeArea}>
        <ModalPopup name={user.sauce[0].title} />
      </div>
    </Card>
  );
};
export default Dish1;
