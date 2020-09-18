import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#005C8E',
    },
    typography: {
        fontSize: '16px',
        padding: '10px',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#fff'
    },
})

const FooterSecond = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography className={classes.typography}>
                <small>&copy; 2020 social buddy – all rights reserved</small> | created by Apel Mahmud
            </Typography>
            <Typography className={classes.typography}>
                Privacy Policy | Terms of Service | Sitemap
            </Typography>
        </div>
    );
};

export default FooterSecond;