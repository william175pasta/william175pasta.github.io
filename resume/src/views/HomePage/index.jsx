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
            我的個性活潑慢熱並善於傾聽他人意見，喜歡學習新奇的事務，在日新月異的時代充實自己非常重要，
            料理及程式設計對於我更有別於一般的吸引，求學一路上並沒有讀正統餐飲學系，但我相信後天的努力與學習更重要，
            把握任何一次可以學習的機會，
            清楚自己喜歡甚麼，而不是找個不對盤的工作，陸續在幾間餐館服務過，
            從中學習產業的營運及模式，能體會資訊服務產業的未來發展非常的大，也極具挑戰力。
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
