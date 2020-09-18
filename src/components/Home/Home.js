import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import { Container, Typography } from '@material-ui/core';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])

    return (
        <Container>
            <Typography variant="h6">
                Recent Post ({posts.length})
            </Typography>
            {
                posts.map((post => <Post 
                    post={post}
                    key={post.id}
                    ></Post>))
            }
        </Container>
    );
};

export default Home;