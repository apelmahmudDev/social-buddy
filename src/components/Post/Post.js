import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@material-ui/core';
import './Post.css';
import { Link } from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const Post = (props) => {
    // post comming from Home component by props
    const { body, id } = props.post;
    
    const [like, setLike] = useState(3);

    return (
        <Container className="post__container">
            <Box  className="post">
                <Typography className="post__typography">
                    {body}
                    {/* Button for see more */}
                    <Box display="flex" alignItems="center" mt={2}>
                        <Box display="flex" alignItems="center">
                            <ThumbUpAltIcon onClick={() => setLike(like + 1)}></ThumbUpAltIcon>
                            <p>{like}</p>
                        </Box>
                        <Box ml={4}>
                            <Link className="post__link" to={`/postDetails/${id}`}>
                                <Button className="main__button" mt={3}>See more</Button>
                            </Link>
                        </Box>
                    </Box>
                </Typography>
            </Box>
        </Container>
    );
};

export default Post;