import * as React from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TouchAppOutlinedIcon from '@material-ui/icons/TouchAppOutlined';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
const persnoal = {

    title: ["TomatoSauce-蕃茄紅醬", "CreamSauce-奶油白醬", "BasilSauce-羅勒青醬"]
}

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 15,
    },
    body: {
        fontSize: 14,
        backgroundColor: '#FFEBCD',
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {

        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.common.white,
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.common.white,
        },
    },
}))(TableRow);


function createData(name, gramme) {
    return { name, gramme };
}

const rowsOne = [
    createData('沙拉油', 159),
    createData('蒜碎', 237),
    createData('洋蔥碎', 262),
];

const rowsTwo = [
    createData('西芹碎', 159),
    createData('濃縮番茄', 237),
    createData('水', 262),
    createData('玉米粉', 262),

];

const rowsThree = [
    createData('白砂糖', 159),
    createData('雞粉', 237),
    createData('義大利香料', 262),
    createData('柴魚精', 262),
];

const useStyles = makeStyles({
    table: {
        width: '330px',
    },
});


const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },

    expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiExpansionPanelDetails);


const TableForTomato = (props) => {

    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (

        <div>
            <Header />
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Paper >
                        <Typography component="div" style={{ backgroundColor: '#eee', padding: '10px' }}>

                            <Grid container spacing={3} className="cards">



                                <Grid item xs={12} >
                                    <h2>{persnoal.title[0]}</h2>
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <Table style={{ width: '280' }} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell>爆香料（Spice）</StyledTableCell>
                                                <StyledTableCell align="right">份量(g)</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rowsOne.map(row => (
                                                <StyledTableRow key={row.name}>
                                                    <StyledTableCell component="th" scope="row"> {row.name} </StyledTableCell>
                                                    <StyledTableCell align="right">{row.gramme}</StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <Table style={{ width: '280' }} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell>塊狀原料(Lump material)</StyledTableCell>
                                                <StyledTableCell align="right">份量(g)</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rowsTwo.map(row => (
                                                <StyledTableRow key={row.name}>
                                                    <StyledTableCell component="th" scope="row"> {row.name} </StyledTableCell>
                                                    <StyledTableCell align="right">{row.gramme}</StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Table style={{ width: '280' }} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell>調味料(Seasoning)</StyledTableCell>
                                                <StyledTableCell align="right">份量(g)</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rowsThree.map(row => (
                                                <StyledTableRow key={row.name}>
                                                    <StyledTableCell component="th" scope="row"> {row.name} </StyledTableCell>
                                                    <StyledTableCell align="right">{row.gramme}</StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Grid>



                                <Grid item xs={12} sm={12}>
                                    <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                                            <Typography>

                                                <span style={{ color: 'red', fontSize: '16px' }}>TomatoSauce作法 : </span>
                                                <TouchAppOutlinedIcon color="disabled" />
                                            </Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Typography>
                                                <span style={{ fontSize: '16px', fontWeight: 'bold', letterSpacing: '2px', fontStyle: 'italic' }}>

                                                    <li>Take a large pot and fry the ingredients inside the spice until browned.</li>
                                                    <li>Add chunky ingredients to a large saucepan.</li>
                                                    <li>Add all seasoning powder after boiling and stir well.</li>
                                                    <li>Turn off the heat for five minutes, add the thickened water, and cook again.</li>

                                                </span>
                                            </Typography>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                </Grid>
                                <Grid item xs={12} sm={12} style={{ textAlign: 'center' }} >
                                    <Button variant="contained" href="#About" style={{ padding: '10px', margin: '10px' }}>
                                        BACK
                                    </Button>
                                </Grid>
                            </Grid>
                        </Typography>
                    </Paper>
                </Container>
            </React.Fragment>
            <Footer />
        </div>
    )
}

export default TableForTomato;