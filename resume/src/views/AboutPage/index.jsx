import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carousel from './Carousel';

/**
 * 關於我介紹
 * @param {*} props
 */
const AboutPage = props => {
    const persnoal = {
        title: '威廉背景',
        introduction:
            '我的個性活潑慢熱並善於傾聽他人意見， 喜歡學習新奇的事務，在日新月異的時代充實自己非常重要，料理及程式設計對於我更有別於一般的吸引， 求學一路上並沒有讀正統餐飲學系，但我相信後天的努力與學習更重要，把握任何一次可以學習的機會， 清楚自己喜歡甚麼，而不是找個不對盤的工作，陸續在幾間餐館服務過，從中學習產業的營運及模式， 能體會資訊服務產業的未來發展非常的大，也極具挑戰力。 聽聞 貴公司正招募人才，本人對此一職非常感興趣，如蒙錄用，必當竭誠工作貢獻一己之長。',
    };

    return (
        <React.Fragment>
            <Header />
            {/* <Carousel /> */}
            <Grid item xs={12}>
                <h2>{persnoal.title}</h2>
                <p>{persnoal.introduction}</p>
            </Grid>
            <Footer />
        </React.Fragment>
    );
};

export default AboutPage;
