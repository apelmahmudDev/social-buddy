import React from 'react';
import './Banner.css';
import banner from '../../images/banner2.jpg';
import { Box, Button, Container, Typography } from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

const Banner = () => {
    return (
        <div className="banner">
            <div>
                <img src={banner} alt=""/>
            </div>
            <Container className="banner__text">
                <Typography variant="h4" className="banner__text__title">
                    We are <br/> Friends all here....
                </Typography>
                <Box mt={2}>
                    <Button variant="contained"><GroupAddIcon style={{marginRight:'5px'}} /> Connect with us</Button>
                </Box>
            </Container>
        </div>
    );
};

export default Banner;