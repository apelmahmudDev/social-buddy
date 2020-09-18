import React, { useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import './Post.css';
import { Link } from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const Post = (props) => {
	// post comming from Home component by props
	const { body, id } = props.post;

	const [like, setLike] = useState(3);

	return (
		<div className="post__container">
			<Box className="post">
				<Typography component="div" className="post__typography">
					{body}
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
