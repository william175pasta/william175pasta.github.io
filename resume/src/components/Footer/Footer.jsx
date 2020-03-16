import React from 'react';
// import Favorite from "@material-ui/icons/Favorite";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import footer2 from '../../images/footer/footer-background.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
        fontSize: '14px',
        padding: '50px 0 0',
        margin: '50px 0 0',
    },
    list: {
        listStyleType: 'none',
        textAlign: 'center',
    },
    a: {
        color: '#00c',
    },
}));

const Footer = props => {
    const classes = useStyles();
    return (
        <footer>
            <div className={classes.root} style={{ backgroundColor: '#ddd' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <li className={classes.list}>
                            <a href="https://www.facebook.com" target="_blank" title="Facebook" className={classes.a}>
                                <FacebookIcon />
                                Facebook
                            </a>
                        </li>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <li className={classes.list}>
                            <a href="https://www.instagram.com" target="_blank" title="Instagram" className={classes.a}>
                                <InstagramIcon />
                                Instagram
                            </a>
                        </li>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <li className={classes.list}>
                            <a
                                href="https://github.com/william175pasta"
                                target="_blank"
                                title="GitHub"
                                className={classes.a}
                            >
                                <GitHubIcon />
                                GitHub
                            </a>
                        </li>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <li className={classes.list} style={{ color: '#000' }}>
                            &copy; Copy Posted by: william.
                        </li>
                    </Grid>
                </Grid>
                {/* <div className={classes.root}
					style={{ height: 240, backgroundImage: `url(${footer2})` }}>
				</div> */}
            </div>
        </footer>
    );
};

export default Footer;
