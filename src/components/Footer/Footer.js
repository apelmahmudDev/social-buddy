import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import './Footer.css';
import logo from '../../images/buddy.png';

const Footer = () => {
	return (
		<div className="footer">
			<Container>
                <Grid container spacing={1}>
                    <Grid container item xs={12} md={4} spacing={3}>
                        <Typography variant="h5">
                            <img className="footer__logo" src={logo} alt=""/>
                            Social-Buddy
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} md={4} spacing={3}>
                        <Typography>
                            Hello
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} md={4} spacing={3}>
                        <Typography>
                            Hello
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
		</div>
	);
};

export default Footer;
