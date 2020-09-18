import React from 'react';
import { 
    Box, 
    Container, 
    Grid, List, 
    makeStyles, 
    Typography,  
    ListItem, 
    ListItemText
} from '@material-ui/core';
import './Footer.css';
import logo from '../../images/buddy.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    linkIcon: {
        fontSize: '45px',
        color: '#FED216',
        '&:hover': { color: 'orange'},
        marginRight: '10px'
    },
    list: {
        color: '#fff',
        '&:hover': {textDecoration: 'underline'}
    }
})

function ListItemLink(props) {
    return <ListItem component="a" {...props} />;
}
  
const Footer = () => {
    const classes = useStyles();
	return (
		<div className="footer">
			<Container>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5">
                            <img className="footer__logo" src={logo} alt=""/>
                        </Typography>
                        <Typography component="div">
                            <Box textAlign="justify" lineHeight={2}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, blanditiis facilis vitae maxime temporibus, vel voluptatem voluptatibus rerum provident quibusdam doloribus facere nulla laboriosam porro quasi deserunt asperiores itaque soluta!
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography component="div">
                            <Typography variant="h5">
                                <Box>Follow Us</Box>
                            </Typography>
                            <Typography>
                                <Box>
                                    <Link to="/"><FacebookIcon className={classes.linkIcon} /></Link>
                                    <Link to="/"><TwitterIcon className={classes.linkIcon} /></Link>
                                    <Link to="/"><LinkedInIcon className={classes.linkIcon} /></Link>
                                    <Link to="/"><InstagramIcon className={classes.linkIcon} /></Link>
                                </Box>
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography component="div">
                            <Typography variant="h5">Latest Posts</Typography>
                            {/* Recent post list  */}
                            <List style={{marginLeft: '-15px'}}>
                                <ListItemLink href="/">
                                    <ListItemText className={classes.list} primary="Lorem ipsum dolor sit amet." />
                                </ListItemLink>
                                <ListItemLink href="/">
                                    <ListItemText className={classes.list} primary="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
                                </ListItemLink>
                                <ListItemLink href="/">
                                    <ListItemText className={classes.list} primary="Lorem, ipsum dolor." />
                                </ListItemLink>
                                <ListItemLink href="/">
                                    <ListItemText className={classes.list} primary="Lorem ipsum dolor sit" />
                                </ListItemLink>
                                <ListItemLink href="/">
                                    <ListItemText className={classes.list} primary="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate?" />
                                </ListItemLink>
                            </List>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
		</div>
	);
};

export default Footer;
