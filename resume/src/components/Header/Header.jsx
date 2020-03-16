import React from 'react';
import { useHistory } from 'react-router-dom';
import * as _ from 'underscore';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export const routesData = [
    { label: '關於我', path: '/About' },
    { label: '私房菜', path: '/MainDish' },
    { label: '工作經驗', path: '/Works' },
];

const Header = props => {
    const [value, setValue] = React.useState(0);
    const history = useHistory();
    const a11yProps = index => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    };
    const handleChange = (event, newValue) => {
        const route = routesData[newValue];
        console.log('handleChange:', newValue);
        setValue(newValue);
        history.push(route.path);
    };
    return (
        <header>
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
