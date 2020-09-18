import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import sorryImage from '../../images/sorry.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles({
    root: {
        color: '#1B1A07',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        backgroundColor: '#fff',
    },
    sorryImage: {
        height: '100px'
    },
    backbtn: {
        textDecoration: 'none'
    }
})

const NotFound = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box className={classes.box} textAlign="center">
                <img className={classes.sorryImage} src={sorryImage} alt=""/>
                <Typography component="div">
                    <Typography variant="h4">404</Typography>
                    <Typography variant="h6">Page Not Found</Typography>
                    <Link to="/" className={classes.backbtn}>
                        <Button style={{fontWeight: 'bold', color: '#F1D237'}}><ArrowBackIcon /> Back to home</Button>
                    </Link>
                </Typography>
            </Box>
        </div>
    );
};

export default NotFound;