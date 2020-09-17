import React, { useEffect, useState } from 'react';
import './PostDetails.css';
import { useParams } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@material-ui/core';
import Comment from '../Comment/Comment';
import ChatIcon from '@material-ui/icons/Chat';


const PostDetails = () => {
    const [post, setPost] =  useState([]);
    const [comments, setComments] = useState([]);
    const { postId } = useParams();

    // json Rest Api Post
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    // json Rest Api comments
    useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => setComments(data))
    },[])

    return (
        <Container className="post__details">
            <Box  className="post__details__post">
                <Typography>
                    <h2>{post.title}</h2>
                    {post.body}
                    {/* Post comment */}
                    <p><strong>Comments</strong></p>
                    <Box className="post__details__button" mt={2}>
                    <p><ChatIcon /><strong>{comments.length}</strong></p>
                        { 
                            comments.map(comment => <Comment 
                                comment={comment}
                                ></Comment>) 
                        }
                    </Box>
                </Typography>
            </Box>
        </Container>
    );
};

export default PostDetails;