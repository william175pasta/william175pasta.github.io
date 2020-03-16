import * as React from 'react';
import { useState, useContext } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import ShoppingCart from './shoppingcart'
import ProgTest from './progTest'
import FiveAverage from './fiveAverage'
import DateClock from './dateClock';
import TestUseState from '../../components/Content/ActiveComponents/hooksTest1'
import TestUseContext from '../../components/Content/ActiveComponents/hooksTest2'
import TestUseReducer from '../../components/Content/ActiveComponents/hooksUseReducer'
import HooksUseEffectTwo from '../../components/Content/ActiveComponents/hooksUseEffectTwo'
import GameMerge from '../../components/Content/ActiveComponents/gameMerge'
import ImageCarousel from '../../components/Content/AboutComponents/ImageCarousel'


export const AppContext = React.createContext({});

const useStyles = makeStyles(them => ({
    a: {
        cursor: 'pointer',
        border: '1px solid red',
        width: '50px',
        height: '30px',
        textAlign: 'center',
        backgroundColor: '#f87',
    },
    size: {
        display: 'flex',
        justifyContent: 'space-around',
    }
}))

const ActivePage = (props) => {
    const classes = useStyles();

    return (
        <div >
            <Header />
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    {/* <Componentimages /> */}
                    <Paper>
                        <Typography component="div" style={{ backgroundColor: '#eee' }}>
                            <DateClock />
                            <ShoppingCart />
                        </Typography>
                    </Paper>
                    {/* 
                    <Paper>
                        <Typography component="div" style={{ backgroundColor: '	#B0C4DE', }}>
                            <ProgTest />
                        </Typography>
                    </Paper> */}

                    {/* <Paper>
                        <Typography component="div" style={{ backgroundColor: '#87CEFA', }}>
                            <FiveAverage />
                        </Typography>
                    </Paper>
 */}
                    {/* <Paper>
                        <Typography component="div" style={{ backgroundColor: '#eee', }}>
                            <TestUseReducer />
                        </Typography>
                    </Paper> */}
                    {/* 
                    <Paper>
                        <Typography component="div" style={{ backgroundColor: '#AFEEEE', }}>
                            <AppContext.Provider value={{
                                myName: 'Bill',
                                myFriendName: 'Jerry',
                                titleName: ['FirstTest', 'SecondTest', 'ThirdTest']
                            }}>
                                <TestUseState />
                                <TestUseContext />
                            </AppContext.Provider>
                        </Typography>
                    </Paper> */}
                    <Paper>
                        <Typography component="div" style={{ backgroundColor: '#eee', }}>
                            <HooksUseEffectTwo />
                        </Typography>
                    </Paper>
                    <Paper>
                        <Typography component="div" style={{ backgroundColor: '#fff', }}>
                            < GameMerge />
                        </Typography>
                    </Paper>

                    <Paper>
                        <Typography component="div" style={{ backgroundColor: '#fff', }}>
                            <ImageCarousel />
                        </Typography>
                    </Paper>
                </Container>
            </React.Fragment >
            <Footer />
        </div >
    );
};
export default ActivePage; 