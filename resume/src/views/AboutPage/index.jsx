import React from 'react';
import Grid from '@material-ui/core/Grid';

import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import Carousel from './Carousel';

/**
 * 關於我介紹
 * @param {*} props
 */
const AboutPage = props => {
    return (
        <React.Fragment>
            <Header color="dark"/>
            <Grid item xs={12}>
                <h2>輪播區 - 放一些個人生活照</h2>
            </Grid>
            {/* <Carousel /> */}
            <Grid item xs={12}>
                <h2>威廉背景</h2>
                <p>
                我是魏亦良，家住淡水，大學畢業於聖約翰科技大學資訊工程，隨後到南沙太平島服役，體會團隊合作的重要性，及有效率的處理長官交代辦事項，退伍後，起初對於廚藝方面頗有興趣，當時家裡是開餐廳的，所以決定先回家幫忙，因廚藝工作需求而自學考取國家中、西餐餐飲證照，之後，個人希望多方面嘗試，分別在晶華飯店，Lapasta義麵屋服務。

                在餐飲業的這些年，還是不忘關注資訊動向，因緣際會下，開始與大學學長接觸Web領域，
                發現個人對於開發程式覺得有趣且非常的熱衷，於是開始自行學習前端相關技術，從網路上的資源學起，過程中也會請教已在業界的學長和同學們。
                
                由於從來沒有資訊相關經驗的我，從最基礎的HTML、JS、CSS開始出發，為了讓個人有效學習成長，尋找到Trello來訂個人學習計畫及管理工作看板，過去在學校只有使用過notepad++，但現在多了很多開發編輯器，爬文分享比較後決定選用VSCode做開發，並體驗到編輯器的強大且快速有效率的寫code，每天勤練習切版及做一些JS邏輯運算，但隨著HTML的DOM越來越多，CSS也同時成長的過程，越來越難做管理，所以改用目前多人使用的React Framework作為頁面顯示層開發元件，以及使用sass做css管理，近期React在16.8版推出hook，原從Class Component開始實作到Functional Component還有嘗試Style Component作法，最後也使用過JQuery套件Ajax串接API，顯示假資料在頁面上。                
                </p>
            </Grid>
            <Grid item xs={12}>
                <h2>個人聯絡區</h2>
            </Grid>
            <Footer />
        </React.Fragment>
    );
};

export default AboutPage;
