import React, { useState } from "react";

import Popup from "reactjs-popup";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    modal: {
        fontSize: '20px',
        color: 'red'
    },
    header: {
        width: '100%',
        borderBottom: '1px solid gray',
        fontSize: '18px',
        textAlign: 'center',
        padding: '5px'
    },
    content: {
        width: '100%',
        padding: '10px 5px'
    },
    close: {
        cursor: 'pointer',
        position: 'absolute',
        display: 'block',
        padding: '2px 5px',
        lineHeight: '20px',
        right: '-10px',
        top: '-10px',
        fontSize: '24px',
        background: '#ffffff',
        borderRadius: '18px',
        border: '1px solid #cfcece'
    },
    actions: {
        width: ' 100%',
        padding: '10px 5px',
        margin: ' auto',
        textAlign: 'center'
    },
    typography: {
        padding: '10px',
        fontSize: '18px'
    },
}));

const Modal = (props) => {
    console.log(props)
    const { address, tell, title, branch1, branch2, branch3 } = props.woksInformation

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (

        <div>
            <Button size="small" color="primary" aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                Information
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography className={classes.typography} >

                    {/* <div className="header"> Modal Title </div> */}

                    <span style={{ color: 'red', fontSize: '20px' }}>{title}</span>
                    <br />
                    <span>
                        {branch1}<br />
                        {branch2}<br />
                        {branch3}
                    </span>

                </Typography>
            </Popover>
        </div>







    )

}
export default Modal






