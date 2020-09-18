import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import './Post.css';
import { Link } from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import postUser from '../../fakeData/postUser';

const Post = (props) => {
	// post comming from Home component by props
	const { body, id } = props.post;
	const [users, setUsers] = useState([]);
	const [like, setLike] = useState(3);

	useEffect(() => {
		const allPostUser = postUser;
		setUsers(allPostUser);
	},[])

	const aPostUser = users.find(user => user.id === id);

	return (
		<div className="post__container">
			<Box className="post">
				<Typography component="div" className="post__typography">
					<Box display="flex" alignItems="center" mb={2}>
						<img className="post__user__image" src={aPostUser && aPostUser.img} alt=""/>
						<Box ml={1}>
							<Typography className="post__user" variant="h6">
								{aPostUser && aPostUser.name}
							</Typography>
						</Box>
					</Box>
					<Typography>{body}</Typography>
					{/* Button for see more */}
					<Box display="flex" alignItems="center" mt={2}>
						<Box display="flex" alignItems="center">
							<ThumbUpAltIcon
								style={{ cursor: 'pointer' }}
								onClick={() => setLike(like + 1)}
							/>
							<p>like {like}</p>
						</Box>
						<Box ml={4}>
							{/* Sent daynamic id from here */}
							<Link className="post__link" to={`/postDetails/${id}`}>
								<Button className="main__button" mt={3}>See more</Button>
							</Link>
						</Box>
					</Box>
				</Typography>
			</Box>
		</div>
	);
};

export default Post;
