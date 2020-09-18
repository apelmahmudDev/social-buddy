import React, { useEffect, useState } from 'react';
import './Home.css';
import Post from '../Post/Post';
import { Container, Typography } from '@material-ui/core';

const Home = () => {
    const [posts, setPosts] = useState([]);
    // const totalPost = posts.slice(0, 15);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])

    return (
        <Container>
            <Typography variant="h6" className="post__length">
                Recent Post ({posts.length})
            </Typography>
            {
                posts.map((post => <Post post={post}></Post>))
            }
        </Container>
    );
};

export default Home;