import * as React from 'react';
import { useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import WorksPopover from '../../components/Content/WorksPageComponents/worksPopover';
import Modal from '../../components/Content/WorksPageComponents/Modal';

import logo1 from '../../images/logo/001.jpg';
import logo2 from '../../images/logo/002.jpg';
import logo3 from '../../images/logo/003.jpg';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';

const user = {
    works: [
        { name: 'JustItalian義饗食堂', phone: '02-7735-5077', time: '2017/02-2017/06', title: 'CommisB' },
        { name: '175pasta', phone: '02-2620-6682', time: '2013/05-2017/03', title: 'CommisA' },
        { name: 'Lapasta意麵屋', phone: '02-2872-1738 ', time: '2017/07-2019/12', title: 'CommisA' },
    ],
    title: ['Company', 'WorkExperience'],
};
const woksInformation = {
    address: [
        ' Address : 106台北市大安區羅斯福路四段83號2樓 ',
        ' Address : 106台北市大安區羅斯福路四段83號2樓 ',
        'Address:xoxoxo',
    ],
    time: [' 營業時間 : 12:00–14:30 , 18:00–21:30 ', ' 營業時間 : 11:30–14:00 , 17:00–21:00 '],
    title: ['分店資訊:'],
    branch1: ['【天母店】Address : 台北市士林區天母東路102號. cell: 02-28721738'],
    branch2: ['【南西店】Address : 台北市大同區南京西路25巷4-3號. cell: 02-27920208'],
    branch3: ['【內湖店】Address : 台北市內湖區瑞光路104號. cell: 02-27920208'],
    // othersBranch: `Hello ${woksInformation.Branc1} and`
};

const WorksPage = () => {
    return (
        <div>
            <Header />
            <div>
                <div>
                    <React.Fragment>
                        <CssBaseline />
                        <Container maxWidth="lg">
                            <Paper>
                                <Typography component="div" style={{ backgroundColor: '#eee', padding: '10px' }}>
                                    <div>
                                        <Grid container spacing={3} className="cards">
                                            <Grid item xs={12}>
                                                <h2>{user.title[0]}</h2>
                                            </Grid>

                                            <Grid item xs={12} sm={4} className="cardsContent">
                                                <Card className="cardsContent">
                                                    <CardActionArea>
                                                        <img src={logo1} style={{ width: '100%', height: '140px' }} />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="h2">
                                                                {user.works[0].name}
                                                            </Typography>
                                                            <Typography
                                                                variant="body2"
                                                                color="textSecondary"
                                                                component="p"
                                                            >
                                                                <CallOutlinedIcon />
                                                                {user.works[0].phone}
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                    <CardActions>
                                                        <Button size="small" variant="contained">
                                                            <a
                                                                href="https://www.regenthotels.com/tw/regent-taipei/dining/outside-dining/just-italian"
                                                                target="_blank"
                                                            >
                                                                {' '}
                                                                Link
                                                            </a>
                                                        </Button>
                                                        <WorksPopover
                                                            address={woksInformation.address[0]}
                                                            tell={woksInformation.time[0]}
                                                        />
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} sm={4} className="cardsContent">
                                                <Card className="cardsContent">
                                                    <CardActionArea>
                                                        <img src={logo2} style={{ width: '100%', height: '140px' }} />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="h2">
                                                                {user.works[1].name}
                                                            </Typography>
                                                            <Typography
                                                                variant="body2"
                                                                color="textSecondary"
                                                                component="p"
                                                            >
                                                                <CallOutlinedIcon />
                                                                {user.works[1].phone}
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                    <CardActions>
                                                        <Button size="small" variant="contained">
                                                            <a href="https://www.facebook.com/175Pasta" target="_blank">
                                                                {' '}
                                                                Link
                                                            </a>
                                                        </Button>
                                                        <WorksPopover
                                                            address={woksInformation.address[1]}
                                                            tell={woksInformation.time[1]}
                                                        />
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} sm={4} className="cardsContent">
                                                <Card className="cardsContent">
                                                    <CardActionArea>
                                                        <img src={logo3} style={{ width: '100%', height: '140px' }} />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="h2">
                                                                {user.works[2].name}
                                                            </Typography>
                                                            <Typography
                                                                variant="body2"
                                                                color="textSecondary"
                                                                component="p"
                                                            >
                                                                <CallOutlinedIcon />
                                                                {user.works[2].phone}
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                    <CardActions>
                                                        <Button size="small" variant="contained">
                                                            <a href="http://www.lapasta.com.tw/" target="_blank">
                                                                Link
                                                            </a>
                                                        </Button>
                                                        <Modal woksInformation={woksInformation} />
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <h2>{user.title[1]}</h2>
                                            </Grid>
                                            {user.works.map((item, index) => {
                                                const { name, title, time } = item;
                                                const indexTitle = index + 1;
                                                return (
                                                    <Grid item xs={12} sm={4} key={index}>
                                                        <div>
                                                            <h5>WORK {indexTitle}</h5>
                                                            <ul>
                                                                <li>公司名稱 : {name}</li>
                                                                <li>工作職稱 : {title}</li>
                                                                <li>在職時間 : {time}</li>
                                                            </ul>
                                                        </div>
                                                    </Grid>
                                                );
                                            })}
                                        </Grid>
                                    </div>
                                </Typography>
                            </Paper>
                        </Container>
                    </React.Fragment>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WorksPage;
