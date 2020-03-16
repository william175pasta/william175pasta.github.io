import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import SkillCarousel from './skillCarousel';
import img from '../../../images/header/contentPasta.png';

const persnoal = {
    introduction:
        '我的個性活潑慢熱並善於傾聽他人意見， 喜歡學習新奇的事務，在日新月異的時代充實自己非常重要，料理及程式設計對於我更有別於一般的吸引， 求學一路上並沒有讀正統餐飲學系，但我相信後天的努力與學習更重要，把握任何一次可以學習的機會， 清楚自己喜歡甚麼，而不是找個不對盤的工作，陸續在幾間餐館服務過，從中學習產業的營運及模式， 能體會資訊服務產業的未來發展非常的大，也極具挑戰力。 聽聞 貴公司正招募人才，本人對此一職非常感興趣，如蒙錄用，必當竭誠工作貢獻一己之長。',
    title: ['AboutMe', 'WorkExperience', 'Company&Sauce', 'Information'],
};

const styleForP = {
    padding: '30px',
    fontSize: '18px',
};

const HomeContent = () => {
    return (
        <div>
            <div>
                <Grid item xs={12}></Grid>
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="lg">
                        <Paper>
                            <Typography component="div" style={{ backgroundColor: '#eee' }}>
                                <div>
                                    <Grid container spacing={3} className="cards">
                                        <Grid item xs={12}>
                                            <h2>{persnoal.title[3]}</h2>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <img src={img} style={{ width: '100%' }} />
                                            <h2>{persnoal.title[0]}</h2>
                                            <p style={styleForP}>{persnoal.introduction}</p>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Typography>

                            <SkillCarousel />
                        </Paper>
                    </Container>
                </React.Fragment>
            </div>
        </div>
    );
};
export default HomeContent;
