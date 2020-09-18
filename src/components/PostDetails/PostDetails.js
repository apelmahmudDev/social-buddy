import React, { useEffect, useState } from 'react';
import './PostDetails.css';
import { useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@material-ui/core';
import Comment from '../Comment/Comment';
import ChatIcon from '@material-ui/icons/Chat';
import postUser from '../../fakeData/postUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';


const PostDetails = () => {
    const [post, setPost] =  useState([]);
    const [users, setUsers] = useState([]);
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
    // load post user image and name
    useEffect(() => {
		const allPostUser = postUser;
		setUsers(allPostUser);
	},[])

    const aPostUser = users.find(user => user.id === post.id);
    
    return (
        <Container className="post__details">
            <Box  className="post__details__post">
                <Typography component="div">
                    <Box display="flex" alignItems="center" mb={2}>
						<img className="post__user__image" src={aPostUser && aPostUser.img} alt=""/>
						<Box ml={1}>
							<Typography className="post__user" variant="h6">
								{aPostUser && aPostUser.name}
							</Typography>
						</Box>
					</Box>
                    <h4 className="post__details__title">{post.title}</h4>
                    <p className="post__details__body">{post.body}</p>
                    {/* Post comment */}
                    <Box display="flex" justifyContent="space-between" className="comment__share">
                        <Box display="flex" alignItems="center" className="dream__color" style={{cursor:'pointer'}}>
                            <ChatBubbleOutlineIcon  />
                            <Typography><strong>Comments</strong></Typography>
                        </Box>
                        <Box display="flex" alignItems="center" className="dream__color" style={{cursor:'pointer'}}>
                            <ShareIcon  />
                            <Typography><strong>Share</strong></Typography>
                        </Box>
                    </Box>
                    <Box>
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