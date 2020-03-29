import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import dishStyle from "./dishStyle";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import food01 from "../../assets/img/foods/food01.jpg";
import food02 from "../../assets/img/foods/food02.jpg";
import food03 from "../../assets/img/foods/food03.jpg";
import food04 from "../../assets/img/foods/food04.jpg";

import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import { NavLink } from "react-router-dom";
import ModalPopup from "../../components/Content/AboutComponents/modalPopup";

import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
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
    <GridContainer>
      <GridItem item xs={12} sm={3}>
        <Card className={classes.root}>
          <NavLink to="/TableForBacil" style={{ textDecoration: "none" }}>
            <CardActionArea>
              <img src={food01} style={{ width: "100%", height: "150px" }} />
              <CardContent>
                <h2>爐烤美國prime肋眼</h2>
                <div>
                  <SentimentSatisfiedAltIcon />
                  &emsp;★★★★★★
                  <div className={classes.percent}>
                    難易度 :
                    <div className={classes.progressbarBack}>
                      <div
                        className={classes.progressbarFront}
                        style={{ width: "90px" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
          </NavLink>
          <div className={classes.activeArea}>
            <ModalPopup name={user.sauce[2].title} />
          </div>
        </Card>
      </GridItem>
      <GridItem item xs={12} sm={3}>
        <Card className={classes.root}>
          <NavLink to="/TableForBacil" style={{ textDecoration: "none" }}>
            <CardActionArea>
              <img src={food02} style={{ width: "100%", height: "150px" }} />
              <CardContent>
                <h2>香煎挪威鮭魚排</h2>
                <div>
                  <SentimentSatisfiedAltIcon />
                  &emsp;★★★★★
                  <div className={classes.percent}>
                    難易度 :
                    <div className={classes.progressbarBack}>
                      <div
                        className={classes.progressbarFront}
                        style={{ width: "82px" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
          </NavLink>
          <div className={classes.activeArea}>
            <ModalPopup name={user.sauce[2].title} />
          </div>
        </Card>
      </GridItem>
      <GridItem item xs={12} sm={3}>
        <Card className={classes.root}>
          <NavLink to="/TableForBacil" style={{ textDecoration: "none" }}>
            <CardActionArea>
              <img src={food03} style={{ width: "100%", height: "150px" }} />
              <CardContent>
                <h2>迷迭香嫩煎雞腿排</h2>
                <div>
                  <SentimentSatisfiedAltIcon />
                  &emsp;★★★★
                  <div className={classes.percent}>
                    難易度 :
                    <div className={classes.progressbarBack}>
                      <div
                        className={classes.progressbarFront}
                        style={{ width: "55px" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
          </NavLink>
          <div className={classes.activeArea}>
            <ModalPopup name={user.sauce[2].title} />
          </div>
        </Card>
      </GridItem>
      <GridItem item xs={12} sm={3}>
        <Card className={classes.root}>
          <NavLink to="/TableForBacil" style={{ textDecoration: "none" }}>
            <CardActionArea>
              <img src={food04} style={{ width: "100%", height: "150px" }} />
              <CardContent>
                <h2>酥烤脆皮德國豬腳</h2>
                <div>
                  <SentimentSatisfiedAltIcon />
                  &emsp;★★★★★
                  <div className={classes.percent}>
                    難易度 :
                    <div className={classes.progressbarBack}>
                      <div
                        className={classes.progressbarFront}
                        style={{ width: "70px" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
          </NavLink>
          <div className={classes.activeArea}>
            <ModalPopup name={user.sauce[2].title} />
          </div>
        </Card>
      </GridItem>
    </GridContainer>
  );
};
export default Dish2;
