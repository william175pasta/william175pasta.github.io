import React from "react";

import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";

import style from "./aboutmePage";
const useStyles = makeStyles(style);

const Aboutme = () => {
  const classes = useStyles();
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8}>
        <div className={classes.aboutmeContent}>
          <h2 className={classes.title}>ABOUT ME</h2>
          <p className={classes.text}>
            Hello! 你好! 我是魏亦良
            我來自新北市淡水，大學畢業於聖約翰科技大學資訊工程。
          </p>
          <p className={classes.text}>
            當兵時期在南沙太平島服役，距離台灣非常遙遠，體會團隊合作的重要性，及有效率的處理長官交代辦事項。
            退伍後，對於廚藝方面頗有興趣，當時家裡是開餐廳的，所以決定先回家幫忙，因廚藝工作需求而去考取國家相關中、西餐餐飲證照。
          </p>

          <p className={classes.text}>
            個人因希望多方面嘗試，分別在晶華飯店，Lapasta義麵屋服務，在餐飲業的這些年，還是不忘關注資訊動向，因緣際會下，開始與大學學長接觸Web領域，
            於是開始自行學習前端相關技術，從網路上的資源學起，過程中也會請教已在業界的學長和同學們。
          </p>
          <p className={classes.text}>
            由於從來沒有資訊相關經驗的我，從最基礎的HTML、JS、CSS開始出發，為了讓個人有效學習成長，尋找到Trello來訂個人學習計畫及管理工作看板，
            也在爬文比較後決定選用VSCode做開發，並體驗到編輯器的強大且快速有效率的寫code，便開始踏入Web領域的世界!
          </p>
        </div>
      </GridItem>
    </GridContainer>
  );
};
export default Aboutme;
