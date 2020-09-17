import React, { useEffect, useState } from 'react';
import './Home.css';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const totalPost = posts.slice(0, 15);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])

    return (
        <div>
            <h2 className="post__length">Recent Post ({totalPost.length})</h2>
            {
                totalPost.map((post => <Post post={post}></Post>))
            }
        </div>
    );
};

export default Home;