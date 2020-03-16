import React from 'react';
import { useHistory } from 'react-router-dom';
import * as _ from 'underscore';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import img from '../../images/header/pasta.jpeg';

const apple = {
    size: 10,
    name: 60,
    age: 55,
};
let arry;
arry = _.keys(apple);
console.log('arry : ', arry);

const a11yProps = index => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};
export const routesData = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/About' },
    { label: 'WorksPage', path: '/Works' },
    { label: 'Active', path: '/Active' },
];

const Header = props => {
    const [value, setValue] = React.useState(0);
    const history = useHistory();
    const handleChange = (event, newValue) => {
        const route = routesData[newValue];
        setValue(newValue);
        history.push(route.path);
    };
    return (
        <header>
            <img src={img} style={{ width: '100%' }} />
            <AppBar position="static">
                <Grid item xs={12}>
                    <Paper>
                        <Tabs
                            className="headerTabs"
                            value={value}
                            onChange={handleChange}
                            aria-label="simple tabs example"
                        >
                            {routesData.length > 0 &&
                                _.map(routesData, (item, index) => {
                                    return <Tab key={index} label={item.label} {...a11yProps(index)} />;
                                })}
                        </Tabs>
                    </Paper>
                </Grid>
            </AppBar>
        </header>
    );
};

export default Header;
