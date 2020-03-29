import * as React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import Parallax from "../../components/Parallax";
import SectionOne from "./SectionOne";

import styles from "./homePage";

import image from "../../assets/img/home/bg.jpg";

const useStyles = makeStyles(styles);

/**
 * 個人首頁
 * @param {*} props
 */
const HomePage = props => {
  const classes = useStyles();
  return (
    <div>
      <Header
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 200,
          color: "dark"
        }}
      />
      <Parallax filter image={image}>
        <div className={classes.container}>
          <h1 className={classes.title}>william的個人網站</h1>
          <h4>
            江振誠說，現在資訊發達，要學怎樣做一道醬汁、怎樣處理什麼食材，
            上網就有。但人才養成缺的從不在資訊與技巧，而在對工作的基本態度和尊重。
          </h4>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionOne />
        </div>
      </div>
      <Footer image={image} />
    </div>
  );
};

export default HomePage;
