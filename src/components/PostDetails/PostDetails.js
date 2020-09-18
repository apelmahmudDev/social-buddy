import React, { useEffect, useState } from 'react';
import './PostDetails.css';
import { useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@material-ui/core';
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
                <Typography component="div">
                    <h2 className="post__details__title">{post.title}</h2>
                    <p className="post__details__body">{post.body}</p>
                    {/* Post comment */}
                    <Typography><strong>Comments</strong></Typography>
                    <Box className="post__details__comment" mt={2}>
                        <Box display="flex" alignItems="center">
                            <ChatIcon />
                            <p><strong>{comments.length}</strong></p>
                        </Box>
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