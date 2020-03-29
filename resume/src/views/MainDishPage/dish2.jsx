import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import dishStyle from "./dishStyle";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import logo2 from "../../images/sauce/white/whitelogo.jpg";
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
const Dish2 = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <NavLink to="/TableForBacil" style={{ textDecoration: "none" }}>
        <CardActionArea>
          <img src={logo2} style={{ width: "100%", height: "140px" }} />
          <CardContent>
            <h2>CreamSauce</h2>
            <p>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </p>
          </CardContent>
        </CardActionArea>
      </NavLink>
      <div className={classes.activeArea}>
        <ModalPopup name={user.sauce[2].title} />
      </div>
    </Card>
  );
};
export default Dish2;
